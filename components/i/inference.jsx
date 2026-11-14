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
		"content": `<style>.fxfj2ebbq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 7h3a3.5 3.5 0 0 1 3.5 3.5v3a3.5 3.5 0 0 1-3.5 3.5h-3A3.5 3.5 0 0 1 7 13.5v-3A3.5 3.5 0 0 1 10.5 7m-8 5H7M4.75 9.75L7 12l-2.25 2.25M17 12h4.5m-2.25-2.25L21.5 12l-2.25 2.25M10 4v3m4-3v3m-4 10v3m4-3v3");
}
</style><path class="fxfj2ebbq"/>`,
		"fallback": "uix:inference",
	});
}

export default Component;
