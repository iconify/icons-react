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
		"content": `<style>.e4-5k5b6o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 14.5v-9a2.5 2.5 0 0 1 5 0m1.5 9v-9a2.5 2.5 0 0 1 5 0M6.5 9H13m-6.5 3H13M2.5 18.5q3-2.25 6 0t6 0t6 0");
}
</style><path class="e4-5k5b6o"/>`,
		"fallback": "uix-sharp:campus-pool",
	});
}

export default Component;
