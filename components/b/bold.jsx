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
		"content": `<style>.f8e4e746c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 4.5h6a3.75 3.75 0 0 1 0 7.5h1a3.75 3.75 0 0 1 0 7.5H7ZM7 12h6");
}
</style><path class="f8e4e746c"/>`,
		"fallback": "uix:bold",
	});
}

export default Component;
