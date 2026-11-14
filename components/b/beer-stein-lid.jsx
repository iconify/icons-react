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
		"content": `<style>.p3nhejqxb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.625 7h5.75A2.625 2.625 0 0 1 16 9.625v8.75A2.625 2.625 0 0 1 13.375 21h-5.75A2.625 2.625 0 0 1 5 18.375v-8.75A2.625 2.625 0 0 1 7.625 7M4.5 7a6 3 0 0 1 12 0ZM16 10h2.5a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-1.5 1.5H16m0-12.5L18.5 3m-10 7.5v7m4-7v7");
}
</style><path class="p3nhejqxb"/>`,
		"fallback": "uix:beer-stein-lid",
	});
}

export default Component;
