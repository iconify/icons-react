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
		"content": `<style>.ucffu_3hb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 3h11v3.5h-11Zm-3 8H10v3.5H3.5ZM14 11h6.5v3.5H14ZM3.5 17.5H10V21H3.5Zm10.5 0h6.5V21H14Z");
}
</style><path class="ucffu_3hb"/>`,
		"fallback": "uix-sharp:classroom-layout",
	});
}

export default Component;
