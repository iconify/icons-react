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

.p8e1l3onn {
  d: path("M13.169 20.388L12.25 21l-2-1.5L8 21l-2-1.5L4 21V2.5h12.5v13.3M7.5 7H13m-5.5 4H11");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="p8e1l3onn"/><path class="e9fltbcec"/></g>`,
		"fallback": "uix-sharp:expense-approval",
	});
}

export default Component;
