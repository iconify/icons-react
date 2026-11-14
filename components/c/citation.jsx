import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.h4-nh27tr {
  d: path("M8.5 13v-2.5A2.5 2.5 0 0 1 11 8m2.5 5v-2.5A2.5 2.5 0 0 1 16 8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mx-xdexdb {
  d: path("M8.5 13H11v-2.5H8.5m5 2.5H16v-2.5h-2.5m-5 6.5h7");
}

.sqgzs9b2w {
  d: path("M8 2.5h8A3.5 3.5 0 0 1 19.5 6v12a3.5 3.5 0 0 1-3.5 3.5H8A3.5 3.5 0 0 1 4.5 18V6A3.5 3.5 0 0 1 8 2.5");
}
</style><g class="hntgybcog"><path class="sqgzs9b2w"/><path class="h4-nh27tr"/><path class="mx-xdexdb"/></g>`,
		"fallback": "uix:citation",
	});
}

export default Component;
