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
		"content": `<style>.xkkcnyk0z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 10h6a3.5 3.5 0 0 1 3.5 3.5v3A3.5 3.5 0 0 1 12 20H6a3.5 3.5 0 0 1-3.5-3.5v-3A3.5 3.5 0 0 1 6 10m-3.5 3.5h13m-1.5-7a3.5 3.5 0 0 1 3.5 3.5M14 3.25A6.75 6.75 0 0 1 20.75 10");
}
</style><path class="xkkcnyk0z"/>`,
		"fallback": "uix:contactless",
	});
}

export default Component;
