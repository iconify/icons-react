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
		"content": `<style>.qbp_-m3cg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 3h5.5A1.75 1.75 0 0 1 12 4.75v2.5A1.75 1.75 0 0 1 10.25 9h-5.5A1.75 1.75 0 0 1 3 7.25v-2.5A1.75 1.75 0 0 1 4.75 3m1.5 6h6.5a1.75 1.75 0 0 1 1.75 1.75v2.5A1.75 1.75 0 0 1 12.75 15h-6.5a1.75 1.75 0 0 1-1.75-1.75v-2.5A1.75 1.75 0 0 1 6.25 9m-2 6h6.5a1.75 1.75 0 0 1 1.75 1.75v2.5A1.75 1.75 0 0 1 10.75 21h-6.5a1.75 1.75 0 0 1-1.75-1.75v-2.5A1.75 1.75 0 0 1 4.25 15m15.25-1L16 18.25h4l-2.75 3.25");
}
</style><path class="qbp_-m3cg"/>`,
		"fallback": "uix:chaos-engineering",
	});
}

export default Component;
