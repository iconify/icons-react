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
		"content": `<style>.r289t4f3p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 5c0-2.5 10-2.5 10 0Zm0 0h10l-1.5 9h-7Zm-.5 9h11v7.5h-11Zm5.5 3.75h.01");
}
</style><path class="r289t4f3p"/>`,
		"fallback": "uix-sharp:blender",
	});
}

export default Component;
