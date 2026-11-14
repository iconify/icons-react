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
		"content": `<style>.ad8gpbhsh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 3.5h10V19a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2Zm10 2.5h3a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-3M4.5 9h10");
}
</style><path class="ad8gpbhsh"/>`,
		"fallback": "uix:glass-mug",
	});
}

export default Component;
