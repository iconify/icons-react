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
		"content": `<style>.js_e0khnx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 8h4a4 4 0 0 1 4 4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m8 4q1.75-3.5 3.5 0t3.5 0");
}
</style><path class="js_e0khnx"/>`,
		"fallback": "uix:bacterial-cell",
	});
}

export default Component;
