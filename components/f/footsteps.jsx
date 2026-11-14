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
		"content": `<style>.f3v2fobus {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 12a3 4 0 1 0 6 0a3 4 0 1 0-6 0m1 8.25a2 1.25 0 1 0 4 0a2 1.25 0 1 0-4 0m8-13.75a3 4 0 1 0 6 0a3 4 0 1 0-6 0m1 8.25a2 1.25 0 1 0 4 0a2 1.25 0 1 0-4 0");
}
</style><path class="f3v2fobus"/>`,
		"fallback": "uix:footsteps",
	});
}

export default Component;
