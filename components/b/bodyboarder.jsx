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
		"content": `<style>.fwwbqvb6c {
  d: path("M9.5 10.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zjgcg4_4l {
  d: path("M2.5 18H9c6 0 10.5-3 11-8c.25-4-3.5-5.5-5.25-3.25M3 15.25h9.5m-9-3l6-1.75");
}
</style><g class="hntgybcog"><path class="zjgcg4_4l"/><path class="fwwbqvb6c"/></g>`,
		"fallback": "uix:bodyboarder",
	});
}

export default Component;
