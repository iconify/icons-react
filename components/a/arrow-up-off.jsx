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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.olk81pbln {
  fill-rule: evenodd;
  d: path("M5.232 8.974a1 1 0 0 1 .128-1.409l4-3.333a1 1 0 1 1 1.28 1.536l-4 3.334a1 1 0 0 1-1.408-.128");
}

.ouck_yb0c {
  fill-rule: evenodd;
  d: path("M10 6a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1");
}

.wrq3hsblz {
  fill-rule: evenodd;
  d: path("M14.768 8.974a1 1 0 0 1-1.408.128l-4-3.334a1 1 0 1 1 1.28-1.536l4 3.333a1 1 0 0 1 .128 1.409");
}

.xedf9ccsf {
  d: path("M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z");
}
</style><g class="cuyn6tgcc"><path clip-rule="evenodd" class="olk81pbln"/><path clip-rule="evenodd" class="wrq3hsblz"/><path clip-rule="evenodd" class="ouck_yb0c"/><path class="xedf9ccsf"/></g>`,
		"fallback": "pepicons-pop:arrow-up-off",
	});
}

export default Component;
