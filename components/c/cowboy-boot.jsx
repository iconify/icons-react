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

.q1stf9too {
  d: path("M4 2.5h10l-1.5 10c1.5 2 5.5 3 7.5 6.25l-1.25.75H10.5l-1 2h-4L6 13Z");
}

.ranxnmeyd {
  d: path("M4.75 6.5Q9 9 13.25 6.5");
}
</style><g class="hntgybcog"><path class="q1stf9too"/><path class="ranxnmeyd"/></g>`,
		"fallback": "uix:cowboy-boot",
	});
}

export default Component;
