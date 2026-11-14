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
		"content": `<style>.an1njnd3j {
  d: path("M2.5 12a6 6 0 1 0 12 0a6 6 0 1 0-12 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.myp7s5anr {
  d: path("M8.5 6v6l5 3.25m4-7.25h3m-3 4h3m-3 4h3");
}
</style><g class="hntgybcog"><path class="an1njnd3j"/><path class="myp7s5anr"/></g>`,
		"fallback": "uix:chart-legend",
	});
}

export default Component;
