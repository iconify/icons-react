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
		"content": `<style>.doqb11jxr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h4v8H3Zm12 0h4v8h-4ZM7 7h8m-.25 11l2 2L21 15.75");
}
</style><path class="doqb11jxr"/>`,
		"fallback": "uix-sharp:dumbbell-check",
	});
}

export default Component;
