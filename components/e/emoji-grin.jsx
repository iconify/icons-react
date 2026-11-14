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
		"content": `<style>.buegprbpu {
  d: path("M7.5 13.5h9c0 2.5-2 4.25-4.5 4.25S7.5 16 7.5 13.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yve3s6bcw {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0M9 10h.01M15 10h.01");
}
</style><g class="hntgybcog"><path class="yve3s6bcw"/><path class="buegprbpu"/></g>`,
		"fallback": "uix:emoji-grin",
	});
}

export default Component;
