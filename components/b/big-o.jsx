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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iyem2zmdi {
  d: path("M6.5 17.5C12 17.5 16 13 19 4.5");
}

.p8u760b4u {
  d: path("M3.5 3v17.5H21");
}
</style><g class="hntgybcog"><path class="p8u760b4u"/><path class="iyem2zmdi"/></g>`,
		"fallback": "uix:big-o",
	});
}

export default Component;
