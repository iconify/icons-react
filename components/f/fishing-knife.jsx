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
		"content": `<style>.wxzj7wbaw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 14.25L20.5 3.5q-2 8-10.75 13.25ZM3.525 18L6 15.525a1.75 1.75 0 0 1 2.475 0a1.75 1.75 0 0 1 0 2.475L6 20.475a1.75 1.75 0 0 1-2.475 0a1.75 1.75 0 0 1 0-2.475");
}
</style><path class="wxzj7wbaw"/>`,
		"fallback": "uix:fishing-knife",
	});
}

export default Component;
