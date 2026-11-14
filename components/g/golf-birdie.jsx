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
		"content": `<style>.yv14z3bac {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 8.5q3.25-5.5 6.75 0q3.5-5.5 6.75 0M3 17.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm7.5-3.75q2-1.75 5-2.25");
}
</style><path class="yv14z3bac"/>`,
		"fallback": "uix-sharp:golf-birdie",
	});
}

export default Component;
