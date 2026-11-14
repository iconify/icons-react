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
		"content": `<style>.lgngk9ddx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 8.5a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0m10 0a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0M5.5 12v7.5m13-7.5v7.5");
}
</style><path class="lgngk9ddx"/>`,
		"fallback": "uix:earbuds",
	});
}

export default Component;
