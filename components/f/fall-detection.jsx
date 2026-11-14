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
		"content": `<style>.mys5wzkis {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.5 5.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm.25 1.25l-7.25 5m2-8.5l2.75 5.25L19 11.5M3.5 16l5-4.5l-1.5 8m11-5V18m0 3h.01");
}
</style><path class="mys5wzkis"/>`,
		"fallback": "uix-sharp:fall-detection",
	});
}

export default Component;
