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
		"content": `<style>.bk6jejrve {
  d: path("M8.25 16.5a3.75 2.75 0 1 0 7.5 0a3.75 2.75 0 1 0-7.5 0m.75-6h.01m5.99 0h.01");
}

.fbheoeb3q {
  fill: currentColor;
  d: path("M10.5 14.75a1.5 1 0 1 0 3 0a1.5 1 0 1 0-3 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ydchexb3l {
  d: path("M4.75 9.5A3 3 0 1 1 8.5 5.75a8 8 0 0 1 7 0a3 3 0 1 1 3.75 3.75a8 8 0 1 1-14.5 0");
}
</style><g class="hntgybcog"><path class="ydchexb3l"/><path class="bk6jejrve"/><path class="fbheoeb3q"/></g>`,
		"fallback": "uix:category-toys",
	});
}

export default Component;
