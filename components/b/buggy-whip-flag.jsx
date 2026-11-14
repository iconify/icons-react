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
		"content": `<style>.d0_p-0b4j {
  d: path("M5.125 10h6.75a2.625 2.625 0 0 1 2.625 2.625v1.75A2.625 2.625 0 0 1 11.875 17h-6.75A2.625 2.625 0 0 1 2.5 14.375v-1.75A2.625 2.625 0 0 1 5.125 10m9.375 2h4l3 3v2h-7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n0z5btbkp {
  d: path("M5 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-11-9V2.5m1.897.632L7.5 3.5a1.054 1.054 0 0 1 0 2l-1.103.368A1.442 1.442 0 0 1 4.5 4.5a1.442 1.442 0 0 1 1.897-1.368");
}
</style><g class="hntgybcog"><path class="d0_p-0b4j"/><path class="n0z5btbkp"/></g>`,
		"fallback": "uix:buggy-whip-flag",
	});
}

export default Component;
