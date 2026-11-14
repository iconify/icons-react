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
		"content": `<style>.t1j1h6bys {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14.5H10V19H2.5Zm11.5 0h7.5V19H14ZM12 5v4M7 6.5l1.75 3.75M17 6.5l-1.75 3.75");
}
</style><path class="t1j1h6bys"/>`,
		"fallback": "uix-sharp:cable-cut",
	});
}

export default Component;
