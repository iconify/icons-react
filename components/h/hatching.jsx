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
		"content": `<style>.zkvmxrbeb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.5 13.5l2.75 2.25l2.5-2.5l2.5 2.5l2.5-2.5l2.75.25c0 4.75-3 8-6.5 8s-6.5-3.25-6.5-8ZM6 10l3.25.5l2.5-2.25l3.25.5l2.5-2.25C15.5-.25 4 3.25 6 10Z");
}
</style><path class="zkvmxrbeb"/>`,
		"fallback": "uix-sharp:hatching",
	});
}

export default Component;
