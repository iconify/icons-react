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
		"content": `<style>.klxz86d8b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 15.5a6.5 5 0 1 0 13 0a6.5 5 0 1 0-13 0M7.5 11l5-8M11 10.75l5-8m-1.5 9.5l5-8M4.5 12l-2-3");
}
</style><path class="klxz86d8b"/>`,
		"fallback": "uix:bagpipes",
	});
}

export default Component;
