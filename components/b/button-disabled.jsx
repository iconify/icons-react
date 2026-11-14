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
		"content": `<style>.c_0d4cvxf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5h19v8h-19Zm4.5 4h10m-3 10.25a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm1-2.5l5 5");
}
</style><path class="c_0d4cvxf"/>`,
		"fallback": "uix-sharp:button-disabled",
	});
}

export default Component;
