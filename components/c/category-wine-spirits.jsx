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
		"content": `<style>.r14u95brl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 3.5h8c0 4.5-1 7.5-4 8c-3-.5-4-3.5-4-8m4 8v8m-4 1h8");
}
</style><path class="r14u95brl"/>`,
		"fallback": "uix:category-wine-spirits",
	});
}

export default Component;
