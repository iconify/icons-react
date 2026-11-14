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
		"content": `<style>.t1y0pt0wa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20h18M3.5 8L8 9l5-2l6 2.5c2 1 1.5 3-.5 3l-6.5-1L6.5 14L5 12.5l3.5-2");
}
</style><path class="t1y0pt0wa"/>`,
		"fallback": "uix-sharp:airplane-landing",
	});
}

export default Component;
