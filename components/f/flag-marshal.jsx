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
		"content": `<style>.hklbes77p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.5v19m0-18C7 2 9.5 2 12 3.5s4.5 1.5 7 0V11l-.037.022m-4.07 1.067c-.926-.111-1.867-.474-2.893-1.089c-2.5-1.5-5-1.5-8 0m12 4.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-1.75 6c0-1.75 1.75-3 3.75-3s3.75 1.25 3.75 3");
}
</style><path class="hklbes77p"/>`,
		"fallback": "uix:flag-marshal",
	});
}

export default Component;
