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
		"content": `<style>.rxxk39b0x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 17.5h9.5A1.75 1.75 0 0 1 16 19.25A1.75 1.75 0 0 1 14.25 21h-9.5A1.75 1.75 0 0 1 3 19.25a1.75 1.75 0 0 1 1.75-1.75m2.25 0q2.5-4 5 0m-2.5-2L19.5 3");
}
</style><path class="rxxk39b0x"/>`,
		"fallback": "uix:flat-mop",
	});
}

export default Component;
