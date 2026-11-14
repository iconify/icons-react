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
		"content": `<style>.o0duf92vo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 4.25L7.5 5l-4 9.5h2l3-6l1 4.5l-1 8.5h7l-1-8.5l1-4.5l3 6h2l-4-9.5l-2.5-.75Zm0-1.75h4v1.75h-4ZM9.5 13l-4 8m9-8l4 8");
}
</style><path class="o0duf92vo"/>`,
		"fallback": "uix-sharp:ao-dai",
	});
}

export default Component;
