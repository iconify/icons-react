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
		"content": `<style>.i5a3xnwvd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h7v5H3Zm10.5 6.5H21v5h-7.5Zm0 7H21v5h-7.5ZM6.5 8v11h7m-7-7h7");
}
</style><path class="i5a3xnwvd"/>`,
		"fallback": "uix-sharp:folder-tree",
	});
}

export default Component;
