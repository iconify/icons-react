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
		"content": `<style>.w0uj2wtip {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.5 12l-1.75 3h-3.5L2.5 12l1.75-3h3.5Zm0 0h1a1.5 1.5 0 1 1 3 0a1.5 1.5 0 1 1-3 0m3 0h1a1.5 1.5 0 1 1 3 0a1.5 1.5 0 1 1-3 0m3 0h1a1.5 1.5 0 1 1 3 0a1.5 1.5 0 1 1-3 0");
}
</style><path class="w0uj2wtip"/>`,
		"fallback": "uix-sharp:atp-molecule",
	});
}

export default Component;
