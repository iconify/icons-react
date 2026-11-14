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
		"content": `<style>.e8peubcax {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 2.5L3 7.75L8 13m7-10.5l5.5 5.25L15 13m0 4.5h6v4h-6Zm1.5 0v-1a1.5 1.5 0 0 1 3 0v1");
}
</style><path class="e8peubcax"/>`,
		"fallback": "uix-sharp:code-freeze",
	});
}

export default Component;
