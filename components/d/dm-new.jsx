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
		"content": `<style>.e1w__l17m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.405 7.942l5.976-2.63a1.75 1.75 0 0 1 2.307 2.307l-2.63 5.976a1.2 1.2 0 0 1-2.183.03l-.857-1.81a1.75 1.75 0 0 0-.833-.833l-1.81-.857a1.2 1.2 0 0 1 .03-2.183M7.75 11.25L15.5 3.5M18 15v6m-3-3h6");
}
</style><path class="e1w__l17m"/>`,
		"fallback": "uix:dm-new",
	});
}

export default Component;
