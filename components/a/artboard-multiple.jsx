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
		"content": `<style>.lpyspcjei {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5.5h8v6h-8Zm11 0h8v6h-8Zm-11 9h8v6h-8Zm11 0h8v6h-8ZM2.5 2.75h4m7 0h4");
}
</style><path class="lpyspcjei"/>`,
		"fallback": "uix-sharp:artboard-multiple",
	});
}

export default Component;
