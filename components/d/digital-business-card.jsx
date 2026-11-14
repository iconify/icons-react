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
		"content": `<style>.fmuzr780e {
  d: path("M14.25 8.5H17a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-2.75a1.5 1.5 0 0 1-1.5-1.5v-4a1.5 1.5 0 0 1 1.5-1.5m-7.5.5h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.poz_fvbbz {
  d: path("M6.875 5h10.25A4.375 4.375 0 0 1 21.5 9.375v5.25A4.375 4.375 0 0 1 17.125 19H6.875A4.375 4.375 0 0 1 2.5 14.625v-5.25A4.375 4.375 0 0 1 6.875 5");
}
</style><g class="hntgybcog"><path class="poz_fvbbz"/><path class="fmuzr780e"/></g>`,
		"fallback": "uix:digital-business-card",
	});
}

export default Component;
