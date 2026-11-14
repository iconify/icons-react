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
		"content": `<style>.ejh--qbth {
  d: path("M4.75 4.5h3.5A1.75 1.75 0 0 1 10 6.25v2.5a1.75 1.75 0 0 1-1.75 1.75h-3.5A1.75 1.75 0 0 1 3 8.75v-2.5A1.75 1.75 0 0 1 4.75 4.5M18 16.5l-3-12h-2m-9 9h13.25M4 16.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j-zwn0boj {
  d: path("M15 16.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}
</style><g class="hntgybcog"><path class="ejh--qbth"/><path class="j-zwn0boj"/></g>`,
		"fallback": "uix:delivery-rider",
	});
}

export default Component;
