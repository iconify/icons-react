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
		"content": `<style>.ldxgjgb8x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 12a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0m9 0h4.5m3 0h3M17 8.5za1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5v-4A1.5 1.5 0 0 1 17 8.5");
}
</style><path class="ldxgjgb8x"/>`,
		"fallback": "uix:colour-hue-slider",
	});
}

export default Component;
