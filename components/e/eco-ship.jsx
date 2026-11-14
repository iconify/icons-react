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
		"content": `<style>.h8_l_lbzd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.408 16H5.5l-3-6h19l-1.118 2.236M7.75 4.5h6.5A1.75 1.75 0 0 1 16 6.25v2A1.75 1.75 0 0 1 14.25 10h-6.5A1.75 1.75 0 0 1 6 8.25v-2A1.75 1.75 0 0 1 7.75 4.5m3.25 0V10m4 11.5c0-4.5 2-6.5 6.5-6.5c0 4.5-2 6.5-6.5 6.5m0 0l3.75-3.75");
}
</style><path class="h8_l_lbzd"/>`,
		"fallback": "uix:eco-ship",
	});
}

export default Component;
