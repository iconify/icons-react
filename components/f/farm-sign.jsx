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
		"content": `<style>.yb51j4h6e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 8l3-3.5h13l3 3.5l-3 3.5h-13Zm9.5 3.5v10m0-19v2");
}
</style><path class="yb51j4h6e"/>`,
		"fallback": "uix-sharp:farm-sign",
	});
}

export default Component;
