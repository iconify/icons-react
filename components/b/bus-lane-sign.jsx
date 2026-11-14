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
		"content": `<style>.aytbzxbuj {
  d: path("M7.5 13V7A1.5 1.5 0 0 1 9 5.5h6A1.5 1.5 0 0 1 16.5 7v6Zm0-3.5h9m-7 3.5v1.75m5-1.75v1.75");
}

.d1mn339oe {
  d: path("M7 2.5h10A3.5 3.5 0 0 1 20.5 6v8a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 14V6A3.5 3.5 0 0 1 7 2.5m5 15v4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="d1mn339oe"/><path class="aytbzxbuj"/></g>`,
		"fallback": "uix:bus-lane-sign",
	});
}

export default Component;
