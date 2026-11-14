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
		"content": `<style>.vkgcinbfi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0M4 21c0-4 3.5-6.5 8-6.5c1.187 0 2.304.174 3.306.503M13.75 19.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0m3.5-1.5L21.5 14m-1.25 1.25l1.5 1.5");
}
</style><path class="vkgcinbfi"/>`,
		"fallback": "uix:accountant-access",
	});
}

export default Component;
