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

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}

.smly-401q {
  d: path("m7 8l4 4l-4 4m5.5-8l4 4l-4 4");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="smly-401q"/></g>`,
		"fallback": "uix:fast-forward-circle",
	});
}

export default Component;
