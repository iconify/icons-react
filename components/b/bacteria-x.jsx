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
		"content": `<style>.we3l8zc2f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 6.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m8.75 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0m-7.75 9a3 3 0 1 0 6 0a3 3 0 1 0-6 0m11 0l5 5m0-5l-5 5");
}
</style><path class="we3l8zc2f"/>`,
		"fallback": "uix:bacteria-x",
	});
}

export default Component;
