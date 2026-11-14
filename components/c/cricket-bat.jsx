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
		"content": `<style>.qkbbxkiiq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.384 4.273l1.732-1a1.5 1.5 0 0 1 2.049.549l5.25 9.093a1.5 1.5 0 0 1-.549 2.049l-1.732 1a1.5 1.5 0 0 1-2.049-.549l-5.25-9.093a1.5 1.5 0 0 1 .549-2.049M14 15.464l2.75 4.763M16.5 19a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}
</style><path class="qkbbxkiiq"/>`,
		"fallback": "uix:cricket-bat",
	});
}

export default Component;
