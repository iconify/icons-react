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
		"content": `<style>.ffd5wj0sz {
  d: path("M11.442 3h1.116a1.75 1.75 0 0 1 1.717 1.416l2.82 14.5A1.75 1.75 0 0 1 15.377 21H8.623a1.75 1.75 0 0 1-1.718-2.084l2.82-14.5A1.75 1.75 0 0 1 11.442 3M7 3L3 21M17 3l4 18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o7dp1htjb {
  d: path("M10.25 17a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M12 6.5h.01");
}
</style><g class="hntgybcog"><path class="ffd5wj0sz"/><path class="o7dp1htjb"/></g>`,
		"fallback": "uix:bumpers-bowling",
	});
}

export default Component;
