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
		"content": `<style>.dk7x6pbdj {
  d: path("M8.5 11.5a3.5 1.75 0 1 0 7 0a3.5 1.75 0 1 0-7 0m-2.75 0h.01m12.49 0h.01M12 16.25h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x7jyndbrk {
  d: path("M2.5 12a9.5 7 0 1 0 19 0a9.5 7 0 1 0-19 0");
}
</style><g class="hntgybcog"><path class="x7jyndbrk"/><path class="dk7x6pbdj"/></g>`,
		"fallback": "uix:bagel",
	});
}

export default Component;
