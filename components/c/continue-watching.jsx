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
		"content": `<style>.ghl3z1aam {
  d: path("m12.317 7.506l.748.486a1.5 1.5 0 0 1 0 2.516l-.748.486A1.5 1.5 0 0 1 10 9.736v-.972a1.5 1.5 0 0 1 2.317-1.258M2.5 20H13m0 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m3 0h5.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r-qkgvbpz {
  d: path("M6.875 3h10.25A4.375 4.375 0 0 1 21.5 7.375v3.75a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 11.125v-3.75A4.375 4.375 0 0 1 6.875 3");
}
</style><g class="hntgybcog"><path class="r-qkgvbpz"/><path class="ghl3z1aam"/></g>`,
		"fallback": "uix:continue-watching",
	});
}

export default Component;
