import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.atyk9iyzz {
  fill-rule: evenodd;
  d: path("M14 10a1 1 0 0 1-1 1H5a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1");
}

.cuyn6tgcc {
  fill: currentColor;
}

.mhrchfb9y {
  fill-rule: evenodd;
  d: path("M11.026 5.232a1 1 0 0 1 1.409.128l3.333 4a1 1 0 0 1-1.536 1.28l-3.334-4a1 1 0 0 1 .128-1.408");
}

.vnkuf7bnd {
  fill-rule: evenodd;
  d: path("M11.026 14.768a1 1 0 0 1-.128-1.408l3.334-4a1 1 0 0 1 1.536 1.28l-3.333 4a1 1 0 0 1-1.409.128");
}

.xedf9ccsf {
  d: path("M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z");
}
</style><g class="cuyn6tgcc"><path clip-rule="evenodd" class="mhrchfb9y"/><path clip-rule="evenodd" class="vnkuf7bnd"/><path clip-rule="evenodd" class="atyk9iyzz"/><path class="xedf9ccsf"/></g>`,
		"fallback": "pepicons-pop:arrow-right-off",
	});
}

export default Component;
