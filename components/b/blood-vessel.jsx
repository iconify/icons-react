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
		"content": `<style>.y2xj9tbhb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 21.5c0-4.5-.5-7-3-9.5c-1.5-1.5-3-4-3-8m11 17.5c0-4.5 1-7 3-9q3-3 3-9M8 3.5c0 3 1.5 5.5 4 8c2.25-2.5 4-5 4-8M10.5 17a1.5 2 0 1 0 3 0a1.5 2 0 1 0-3 0");
}
</style><path class="y2xj9tbhb"/>`,
		"fallback": "uix:blood-vessel",
	});
}

export default Component;
