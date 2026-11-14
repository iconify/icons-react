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
		"content": `<style>.e669l_b8y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 11h9a1 1 0 0 1 1 1v8.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1V12a1 1 0 0 1 1-1Zm1 .25l-2-6.75m5 6.5V3m3 8l1.75-7m1.25 11.5l3-5M6.5 16L3 12.5");
}
</style><path class="e669l_b8y"/>`,
		"fallback": "uix-sharp:hand-stencil-art",
	});
}

export default Component;
