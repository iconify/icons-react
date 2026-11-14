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
		"content": `<style>.l7kjypd0g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 5.5H10A3.5 3.5 0 0 1 13.5 9v6a3.5 3.5 0 0 1-3.5 3.5H6.5A3.5 3.5 0 0 1 3 15V9a3.5 3.5 0 0 1 3.5-3.5m7 4H19l2.5 2.5l-2.5 2.5h-5.5M3 12h7.5m6.5 0h.01");
}
</style><path class="l7kjypd0g"/>`,
		"fallback": "uix:category-accessories",
	});
}

export default Component;
