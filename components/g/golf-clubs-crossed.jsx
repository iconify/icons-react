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
		"content": `<style>.u5q__b4qr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4 2.5l11.25 15m0 0c2.75-1 6.25 0 6.25 2c0 1.5-2 2-4 2H16c-1 0-1.25-1-1-1.75ZM20 2.5l-11.25 15m0 0c-2.75-1-6.25 0-6.25 2c0 1.5 2 2 4 2H8c1 0 1.25-1 1-1.75Z");
}
</style><path class="u5q__b4qr"/>`,
		"fallback": "uix:golf-clubs-crossed",
	});
}

export default Component;
