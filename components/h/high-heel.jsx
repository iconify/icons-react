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
		"content": `<style>.e82asmb0q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 19h4c4 0 7-7.5 11-8h2V5h-1.5c-2.5 0-5 9-10.5 9H5.5q-3 0-3 3q0 2 1.5 2Zm16.5-8v9.5");
}
</style><path class="e82asmb0q"/>`,
		"fallback": "uix-sharp:high-heel",
	});
}

export default Component;
