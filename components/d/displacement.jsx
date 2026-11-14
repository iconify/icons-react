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
		"content": `<style>.zu4oxqfku {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0M17 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0M8.5 15.5l7-7m-4 0h4v4");
}
</style><path class="zu4oxqfku"/>`,
		"fallback": "uix:displacement",
	});
}

export default Component;
