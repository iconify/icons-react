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
		"content": `<style>.fglvd4qva {
  d: path("M9.384 8h5.232a1.75 1.75 0 0 1 1.745 1.879l-.741 10a1.75 1.75 0 0 1-1.745 1.621h-3.75a1.75 1.75 0 0 1-1.745-1.621l-.741-10A1.75 1.75 0 0 1 9.384 8M9.25 8L6.5 3L4 3.75M12 8V2.5l-2 .25M14.75 8l2.75-5l2.5.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r-me36u2m {
  d: path("M16.25 10.5q4.75 4-.5 8");
}
</style><g class="hntgybcog"><path class="fglvd4qva"/><path class="r-me36u2m"/></g>`,
		"fallback": "uix:golf-bag",
	});
}

export default Component;
