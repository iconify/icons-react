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
		"content": `<style>.klwd8rbls {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6v13m0-4h18M3 15h18v4M7.125 10h1.75a1.625 1.625 0 0 1 1.625 1.625a1.625 1.625 0 0 1-1.625 1.625h-1.75A1.625 1.625 0 0 1 5.5 11.625A1.625 1.625 0 0 1 7.125 10M13 15v-2.75a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2V15");
}
</style><path class="klwd8rbls"/>`,
		"fallback": "uix:health-hospital-cover",
	});
}

export default Component;
