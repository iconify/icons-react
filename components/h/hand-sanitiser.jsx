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

.q21-6_b7d {
  d: path("M10.875 10h2.25a4.375 4.375 0 0 1 4.375 4.375v2.25A4.375 4.375 0 0 1 13.125 21h-2.25A4.375 4.375 0 0 1 6.5 16.625v-2.25A4.375 4.375 0 0 1 10.875 10M10 10V7.5h4V10m-2-2.5V4h5v1.5");
}

.qfzsjvbmv {
  d: path("M12 12.75s-2.25 2.5-2.25 3.75a2.25 2.25 0 0 0 4.5 0c0-1.25-2.25-3.75-2.25-3.75");
}
</style><g class="hntgybcog"><path class="q21-6_b7d"/><path class="qfzsjvbmv"/></g>`,
		"fallback": "uix:hand-sanitiser",
	});
}

export default Component;
