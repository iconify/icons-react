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
		"content": `<style>.laf7882hv {
  d: path("M10.5 11q1.5-1.5 3 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v--z3oe6g {
  fill: currentColor;
  d: path("M3.5 8h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Zm11 0h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z");
}
</style><g class="ulnmmdpxh"><path class="v--z3oe6g"/><path class="laf7882hv"/></g>`,
		"fallback": "uix-sharp:eclipse-glasses",
	});
}

export default Component;
