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
		"content": `<style>.ebbts-bkb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3L7 5L3.5 7Zm7 2h10m-17 5L7 12l-3.5 2zm7 2h6.3m2.4 0h1.3m-17 5L7 19l-3.5 2zm7 2h2.1m5.4-4.5V21m-2.75-2.75L18 21l2.75-2.75");
}
</style><path class="ebbts-bkb"/>`,
		"fallback": "uix:episodes-download",
	});
}

export default Component;
