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
		"content": `<style>.gj6o82b_h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5h15L12 11v8.5l-4-2V11Zm18.75 18l-4.5-4.75c-.75-.75-.5-2 .75-2s1.5 1.25.5 2L16.25 18c-1.25.75-1.25 1.5-1 2.25s1 1.25 1.75 1.25c1.5 0 2.5-1 3.25-2.75");
}
</style><path class="gj6o82b_h"/>`,
		"fallback": "uix-sharp:filter-and",
	});
}

export default Component;
