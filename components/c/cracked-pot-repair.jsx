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
		"content": `<style>.dmjiy3b0y {
  d: path("M7 4h10l-1 3c4 2 4.5 10 1 13.5H7C3.5 17 4 9 8 7Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iy4xm5bsk {
  d: path("m11.5 7l2 4l-3 3.5l2.5 6");
}
</style><g class="hntgybcog"><path class="dmjiy3b0y"/><path class="iy4xm5bsk"/></g>`,
		"fallback": "uix:cracked-pot-repair",
	});
}

export default Component;
