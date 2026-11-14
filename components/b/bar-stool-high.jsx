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
		"content": `<style>.ybqyb_2-y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 3h10v2.5H7Zm1.5 2.5L6.5 21m9-15.5l2 15.5M7.25 15h9.5");
}
</style><path class="ybqyb_2-y"/>`,
		"fallback": "uix-sharp:bar-stool-high",
	});
}

export default Component;
