(function(global, factory) {
  "use strict";
  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = global.document ?
      factory(global) :
      function(w) {
          if (!w.document) {
          throw new Error("Zepto requires a window with a document");
        }
        return factory(w);
      };
  } else {
    factory(global);
  }
})(typeof window !== "undefined" ? window : this, function(window) {
  // @CODE

  return Zepto;
});
