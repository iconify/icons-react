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
		"content": `<style>.al98fxblt {
  d: path("M10.625 9h2.75A1.625 1.625 0 0 1 15 10.625a1.625 1.625 0 0 1-1.625 1.625h-2.75A1.625 1.625 0 0 1 9 10.625A1.625 1.625 0 0 1 10.625 9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kdviqtb4u {
  d: path("M6 14.25V9a6 6 0 0 1 12 0v5.25c0 1.5-.75 2.5-1.5 3l3 1.5c1 .5 1.5 1.5 1.5 2.75H3c0-1.25.5-2.25 1.5-2.75l3-1.5c-.75-.5-1.5-1.5-1.5-3");
}
</style><g class="hntgybcog"><path class="kdviqtb4u"/><path class="al98fxblt"/></g>`,
		"fallback": "uix:balaclava",
	});
}

export default Component;
