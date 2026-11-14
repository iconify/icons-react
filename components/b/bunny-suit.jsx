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
		"content": `<style>.ierrxp7ej {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 6a3.5 3.5 0 0 1 7 0l4 2l2 7H19l-2.25-4.5v11H13.5V15h-3v6.5H7.25v-11L5 15H2.5l2-7ZM12 8.75v3.5M7.25 19h3.25m3 0h3.25");
}
</style><path class="ierrxp7ej"/>`,
		"fallback": "uix:bunny-suit",
	});
}

export default Component;
