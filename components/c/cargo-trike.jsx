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
		"content": `<style>.fiis8b0ji {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.625 5.5h5.25A2.625 2.625 0 0 1 21.5 8.125v2.75a2.625 2.625 0 0 1-2.625 2.625h-5.25A2.625 2.625 0 0 1 11 10.875v-2.75A2.625 2.625 0 0 1 13.625 5.5M2.5 16.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m8.5 1.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0m6.75 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M5 16.5l6-4m-3 2l-1.5-6M5 8.5h3.5m4-3l-1-2.5H14");
}
</style><path class="fiis8b0ji"/>`,
		"fallback": "uix:cargo-trike",
	});
}

export default Component;
