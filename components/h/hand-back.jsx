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
		"content": `<style>.bgju8lb-o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 21.5V17l-4-4.5a1.75 1.75 0 0 1 2.75-2.25L8 11.5V5.25a1.375 1.375 0 0 1 2.75 0V4a1.375 1.375 0 0 1 2.75 0v.5a1.375 1.375 0 0 1 2.75 0V6A1.375 1.375 0 0 1 19 6v10c0 2.5-1 4-1.5 5.5M10.75 5.25V9.5m2.75-5v5M16.25 6v3.5");
}
</style><path class="bgju8lb-o"/>`,
		"fallback": "uix:hand-back",
	});
}

export default Component;
