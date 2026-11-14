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

.mctmm2b_j {
  d: path("M12 3za5.75 5.75 0 0 1 5.75 5.75v6.5A5.75 5.75 0 0 1 12 21a5.75 5.75 0 0 1-5.75-5.75v-6.5A5.75 5.75 0 0 1 12 3M6.25 8C4.5 6.75 2.5 7 2.5 8.25c0 1.5 2 2.25 3.75 1.75m11.5-2c1.75-1.25 3.75-1 3.75.25c0 1.5-2 2.25-3.75 1.75");
}

.swy6xbb2k {
  d: path("M10.5 7.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-1.25 3.75h.01m5.49 0h.01M6.25 15.5c3.25-1.5 8.25-1.5 11.5 0");
}
</style><g class="hntgybcog"><path class="mctmm2b_j"/><path class="swy6xbb2k"/></g>`,
		"fallback": "uix:cute-cow",
	});
}

export default Component;
