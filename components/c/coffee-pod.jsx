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
		"content": `<style>.qp067acer {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7 15l1.5-8a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2l1.5 8M4 15h16v3H4Zm10.5 3q4 0 6 3");
}
</style><path class="qp067acer"/>`,
		"fallback": "uix-sharp:coffee-pod",
	});
}

export default Component;
