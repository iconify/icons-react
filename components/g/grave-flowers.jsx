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

.s325aj2iy {
  d: path("M3.75 7a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m6.5-2.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m6.5 2.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}

.z4l2qn7ac {
  d: path("M5.25 16.5h13.5A2.25 2.25 0 0 1 21 18.75A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75a2.25 2.25 0 0 1 2.25-2.25m.25-7.75L12 16.5l6.5-7.75M12 6.25V16.5");
}
</style><g class="hntgybcog"><path class="z4l2qn7ac"/><path class="s325aj2iy"/></g>`,
		"fallback": "uix:grave-flowers",
	});
}

export default Component;
