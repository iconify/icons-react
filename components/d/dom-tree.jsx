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
		"content": `<style>.lvxmijt6f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h7v5h-7Zm10 6.5h9v4.5h-9Zm0 7.5h9V21h-9ZM6 7.5v11.25h6.5M6 11.25h6.5");
}
</style><path class="lvxmijt6f"/>`,
		"fallback": "uix-sharp:dom-tree",
	});
}

export default Component;
