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
		"content": `<style>.d7pue0sgm {
  d: path("M6.5 9h11a3.5 3.5 0 0 1 3.5 3.5v5a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17.5v-5A3.5 3.5 0 0 1 6.5 9m0-2.75L12 2.5l5.5 3.75");
}

.gy5poyn3y {
  d: path("M13.5 18.25v-6.5L9.5 16H16");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="d7pue0sgm"/><path class="gy5poyn3y"/></g>`,
		"fallback": "uix:house-number-plate",
	});
}

export default Component;
