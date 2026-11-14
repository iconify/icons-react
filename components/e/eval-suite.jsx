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

.nctxihvqt {
  d: path("M8 4h8a3.5 3.5 0 0 1 3.5 3.5V18a3.5 3.5 0 0 1-3.5 3.5H8A3.5 3.5 0 0 1 4.5 18V7.5A3.5 3.5 0 0 1 8 4");
}

.r4dfqgbgm {
  d: path("M10.25 2.5h3.5a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 13.75 6h-3.5A1.75 1.75 0 0 1 8.5 4.25a1.75 1.75 0 0 1 1.75-1.75M7.5 10l1.25 1.25L11 9m-3.5 5l1.25 1.25L11 13m-3.5 5l1.25 1.25L11 17m2.75-7h3m-3 4h3m-3 4h3");
}
</style><g class="hntgybcog"><path class="nctxihvqt"/><path class="r4dfqgbgm"/></g>`,
		"fallback": "uix:eval-suite",
	});
}

export default Component;
