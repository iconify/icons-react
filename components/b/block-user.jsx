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
		"content": `<style>.hx57blk5h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm-3 13c0-3.75 3-6.25 7-6.25c1.06 0 1.941 0 2.642.153M14.5 18a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm1-2.5l5 5");
}
</style><path class="hx57blk5h"/>`,
		"fallback": "uix-sharp:block-user",
	});
}

export default Component;
