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
		"content": `<style>.e-_8-yb7k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 6h12.5v12.5H2.75zM6 9.25v6m3-6v6m3-6v6m3.25-6l5.5-5.5");
}
</style><path class="e-_8-yb7k"/>`,
		"fallback": "iconoven:grill-pan-sharp",
	});
}

export default Component;
