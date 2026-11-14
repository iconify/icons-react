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
		"content": `<style>.nxkmozb8x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 21.5L8.5 3L13 21.5M3 7.5h11m-9 5h7m3-.5h6m-2.5-2.5L21 12l-2.5 2.5");
}
</style><path class="nxkmozb8x"/>`,
		"fallback": "uix-sharp:grid-export",
	});
}

export default Component;
