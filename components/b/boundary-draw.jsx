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
		"content": `<style>.lzb83bb6x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 5h6.25l2 9.5H2.5Zm11.5 13.75l-.25-3.25L19 10l3 1.5l-2.75 5.5Zm-14 0h14m-.25-3.25l3 1.5");
}
</style><path class="lzb83bb6x"/>`,
		"fallback": "uix-sharp:boundary-draw",
	});
}

export default Component;
