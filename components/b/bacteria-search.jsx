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
		"content": `<style>.m557b9b_n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.25 3.75a3.54 3.54 0 0 1 5 5l-6.5 6.5a3.54 3.54 0 0 1-5-5Zm-2.5 7.5h.01m3.49-3.5h.01m3.99 9.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m4 1.75L21 21");
}
</style><path class="m557b9b_n"/>`,
		"fallback": "uix:bacteria-search",
	});
}

export default Component;
