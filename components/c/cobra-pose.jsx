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
		"content": `<style>.uy9lvy4it {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 6.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0M21.5 19.5H14c-3.5 0-5.5-4-6.5-8.5m0 0L5 19.5");
}
</style><path class="uy9lvy4it"/>`,
		"fallback": "uix:cobra-pose",
	});
}

export default Component;
