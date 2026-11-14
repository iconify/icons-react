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

.wzq03qhpx {
  d: path("M4 4.5V20M20 4.5V20M2.5 20h3m13 0h3M4 6.5q8 7 16 0");
}

.yo-318cjj {
  d: path("M4 10.5q8 7 16 0m-9.5-.5l-2 3.25m7.5-4l-2 4.5");
}
</style><g class="hntgybcog"><path class="wzq03qhpx"/><path class="yo-318cjj"/></g>`,
		"fallback": "uix:barrier-tape",
	});
}

export default Component;
