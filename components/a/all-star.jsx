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
		"content": `<style>.dp7avlb_b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 4l1.25 4.25h4.5l-3.5 2.5l1.25 4l-3.5-2.5l-3.5 2.5l1.25-4l-3.5-2.5h4.5ZM4 18h16l-1.5 1.75L20 21.5H4l1.5-1.75Z");
}
</style><path class="dp7avlb_b"/>`,
		"fallback": "uix-sharp:all-star",
	});
}

export default Component;
