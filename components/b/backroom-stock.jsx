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
		"content": `<style>.c6ik11b_y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5v19m18-19v19m-18-10h18m-18 10h18M7.25 6h2a1.5 1.5 0 0 1 1.5 1.5V10a1.5 1.5 0 0 1-1.5 1.5h-2a1.5 1.5 0 0 1-1.5-1.5V7.5A1.5 1.5 0 0 1 7.25 6M15 6h1.75a1.5 1.5 0 0 1 1.5 1.5V10a1.5 1.5 0 0 1-1.5 1.5H15a1.5 1.5 0 0 1-1.5-1.5V7.5A1.5 1.5 0 0 1 15 6m-7.75 9.5h4a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-4a1.5 1.5 0 0 1-1.5-1.5v-3a1.5 1.5 0 0 1 1.5-1.5");
}
</style><path class="c6ik11b_y"/>`,
		"fallback": "uix:backroom-stock",
	});
}

export default Component;
