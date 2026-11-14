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
		"content": `<style>.r14ufod2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 9.5h2.5A3.5 3.5 0 0 1 13 13v5a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 18v-5A3.5 3.5 0 0 1 7 9.5m.75-5h1a1.75 1.75 0 0 1 1.75 1.75v1.5A1.75 1.75 0 0 1 8.75 9.5h-1A1.75 1.75 0 0 1 6 7.75v-1.5A1.75 1.75 0 0 1 7.75 4.5M14 6h.01m3.49-2h.01M18 8.25h.01M21 6h.01");
}
</style><path class="r14ufod2k"/>`,
		"fallback": "uix:fixative-spray",
	});
}

export default Component;
