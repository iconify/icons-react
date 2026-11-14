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
		"content": `<style>.jjy4_0c1y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 14.5c-2-4 2.5-8 8-8s10 4 8 8Zm2.5 0h11v2.75h-11Zm5.5-8V4.25");
}
</style><path class="jjy4_0c1y"/>`,
		"fallback": "uix-sharp:beret",
	});
}

export default Component;
