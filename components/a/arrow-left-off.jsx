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
		"content": `<style>.cae1_gb3y {
  fill-rule: evenodd;
  d: path("M8.974 14.768a1 1 0 0 1-1.409-.128l-3.333-4a1 1 0 1 1 1.536-1.28l3.334 4a1 1 0 0 1-.128 1.408");
}

.cuyn6tgcc {
  fill: currentColor;
}

.fyiaghbqy {
  fill-rule: evenodd;
  d: path("M8.974 5.232a1 1 0 0 1 .128 1.408l-3.334 4a1 1 0 1 1-1.536-1.28l3.333-4a1 1 0 0 1 1.409-.128");
}

.nwz_4teju {
  fill-rule: evenodd;
  d: path("M6 10a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1");
}

.xedf9ccsf {
  d: path("M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z");
}
</style><g class="cuyn6tgcc"><path clip-rule="evenodd" class="cae1_gb3y"/><path clip-rule="evenodd" class="fyiaghbqy"/><path clip-rule="evenodd" class="nwz_4teju"/><path class="xedf9ccsf"/></g>`,
		"fallback": "pepicons-pop:arrow-left-off",
	});
}

export default Component;
