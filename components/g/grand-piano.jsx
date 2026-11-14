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
		"content": `<style>.sl0zq6btz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 5a2 2 0 0 1 2-2h4c1.5 0 2 2 3 4.5s7 4 7 8.5v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Zm0 12.5h16m-12 0V21m4-3.5V21m4-3.5V21");
}
</style><path class="sl0zq6btz"/>`,
		"fallback": "uix:grand-piano",
	});
}

export default Component;
