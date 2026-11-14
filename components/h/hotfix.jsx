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
		"content": `<style>.e9pt3hj0n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.75 16.25l5.75-5.75a4.5 4.5 0 0 1 6-6l-4 4a1.5 1.5 0 0 0 2 2l4-4a4.5 4.5 0 0 1-6 6l-5.75 5.75a1.5 1.5 0 0 1-2-2ZM19 14.5l-3.5 4H18l-1 3l3.75-4.25H18.5Z");
}
</style><path class="e9pt3hj0n"/>`,
		"fallback": "uix-sharp:hotfix",
	});
}

export default Component;
