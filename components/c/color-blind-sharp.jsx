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
		"content": `<style>.g6cazd-ju {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.5 7.5h.01m2.99 0h.01m5.99 0h.01m-9.01 3h.01m8.99 0h.01m-9.01 3h.01m2.99 0h.01m5.99 0h.01m-9.01 3h.01m2.99 0h.01m5.99 0h.01m-3.01-9h.01m-.01 3h.01m-.01 3h.01m-.01 3h.01m-3.01-6h.01");
}

.sm5my-bsd {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 12a9.25 9.25 0 1 0 18.5 0a9.25 9.25 0 1 0-18.5 0");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="sm5my-bsd"/><path class="g6cazd-ju"/></g>`,
		"fallback": "iconoven:color-blind-sharp",
	});
}

export default Component;
