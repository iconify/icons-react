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
		"content": `<style>.ea613odxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 8.5h8a2.5 2.5 0 0 1 2.5 2.5v6a2.5 2.5 0 0 1-2.5 2.5h-4l-3.5 2v-2H11A2.5 2.5 0 0 1 8.5 17v-6A2.5 2.5 0 0 1 11 8.5M2.75 11H5.5M3.75 3.75L6 6m5-3.25V5.5");
}
</style><path class="ea613odxh"/>`,
		"fallback": "uix:chat-greeting",
	});
}

export default Component;
