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
		"content": `<style>.inf2oj_cn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.875 10.5h6.25a4.375 4.375 0 0 1 4.375 4.375v2.25a4.375 4.375 0 0 1-4.375 4.375h-6.25A4.375 4.375 0 0 1 4.5 17.125v-2.25A4.375 4.375 0 0 1 8.875 10.5M8 10.5V7a4 4 0 0 1 8 0v3.5m-4 4v3");
}
</style><path class="inf2oj_cn"/>`,
		"fallback": "uix:http-401",
	});
}

export default Component;
