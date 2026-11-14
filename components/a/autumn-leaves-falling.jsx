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

.jy8fribza {
  d: path("M15 20q-.5-5.5 5-5q.5 5.5-5 5m-1.25 1.25l4.75-4.75M12 6h6a2 2 0 1 0-2-2");
}

.r30-akbyd {
  d: path("M3.5 8.5q-.5-5.5 5-5q.5 5.5-5 5M2.25 9.75L7 5m2.5 9.5q-.5-5.5 5-5q.5 5.5-5 5m-1.25 1.25L13 11");
}
</style><g class="hntgybcog"><path class="r30-akbyd"/><path class="jy8fribza"/></g>`,
		"fallback": "uix:autumn-leaves-falling",
	});
}

export default Component;
