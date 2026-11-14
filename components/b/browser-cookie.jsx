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

.mab7rjhks {
  d: path("M16.25 13a4.5 4.5 0 1 1-3-3a2.25 2.25 0 0 0 3 3M10 12.75h.01m3.99 3h.01m-3.26.75h.01");
}

.syybmc_2t {
  d: path("M6.875 2.5h10.25A4.375 4.375 0 0 1 21.5 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 17.125V6.875A4.375 4.375 0 0 1 6.875 2.5M2.5 7h19");
}
</style><g class="hntgybcog"><path class="syybmc_2t"/><path class="mab7rjhks"/></g>`,
		"fallback": "uix:browser-cookie",
	});
}

export default Component;
