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
		"content": `<style>.e9fltbcec {
  d: path("m14.75 18l2 2L21 15.75");
}

.k4e8-tb9v {
  d: path("M3 3h18v7.25H3Zm10.05 17.25H3V13h16.8m1.2 6.7v.55h-.55M7 6.5h.01M7 16.5h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="k4e8-tb9v"/><path class="e9fltbcec"/></g>`,
		"fallback": "uix-sharp:high-availability",
	});
}

export default Component;
