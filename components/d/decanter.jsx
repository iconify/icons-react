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
		"content": `<style>.h5w573r3w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 5.5v3.25a6.5 6.5 0 1 0 4 0V5.5M10.75 3h2.5a1.25 1.25 0 0 1 1.25 1.25a1.25 1.25 0 0 1-1.25 1.25h-2.5A1.25 1.25 0 0 1 9.5 4.25A1.25 1.25 0 0 1 10.75 3");
}
</style><path class="h5w573r3w"/>`,
		"fallback": "uix:decanter",
	});
}

export default Component;
