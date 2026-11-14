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
		"content": `<style>.ur7dh8bas {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 7.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0M2.5 21c0-4.5 3-6.75 7-6.75c1.41 0 2.571.248 3.571.658M18.5 21.5l-3-3.25a2 2 0 0 1 3-2.5a2 2 0 0 1 3 2.5Z");
}
</style><path class="ur7dh8bas"/>`,
		"fallback": "uix:guest-preferences",
	});
}

export default Component;
