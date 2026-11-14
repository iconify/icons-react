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
		"content": `<style>.t79v0nb1i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.25 3h7.5A1.25 1.25 0 0 1 17 4.25a1.25 1.25 0 0 1-1.25 1.25h-7.5A1.25 1.25 0 0 1 7 4.25A1.25 1.25 0 0 1 8.25 3m.25 2.5L6.5 21m9-15.5l2 15.5M7.25 15h9.5");
}
</style><path class="t79v0nb1i"/>`,
		"fallback": "uix:bar-stool-high",
	});
}

export default Component;
