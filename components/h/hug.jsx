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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qbtzpkp0x {
  d: path("M14.275 17.225L12 19.5l-2.263-2.263m-4.521-4.55C2.881 9.837 4.646 4.5 8.5 4.5c1.75 0 3 1.25 3.5 2.5c.5-1.25 1.75-2.5 3.5-2.5c3.847 0 5.613 5.32 3.295 8.173");
}

.w_5hlgbaa {
  d: path("M2.5 21c1.5-4 4-6.5 6.5-6.5q1.5 0 1.5-2m11 8.5c-1.5-4-4-6.5-6.5-6.5q-1.5 0-1.5-2");
}
</style><g class="hntgybcog"><path class="qbtzpkp0x"/><path class="w_5hlgbaa"/></g>`,
		"fallback": "uix:hug",
	});
}

export default Component;
