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
		"content": `<style>.x13-t0bxe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 2.5h13v16l-3.25 2.75L12 18.5l-3.25 2.75L5.5 18.5Zm3 4.5h3M10 5.5v3M13.5 7h2m-7 4.5h7m-7 4H13");
}
</style><path class="x13-t0bxe"/>`,
		"fallback": "uix:adding-machine-tape",
	});
}

export default Component;
