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

.mj2w05jsa {
  d: path("M14.75 15L16 9l1.25 6");
}

.ov7gzkbwx {
  d: path("M3 12a5 5 0 1 0 10 0a5 5 0 1 0-10 0");
}

.svldow8wg {
  d: path("M11 12a5 5 0 1 0 10 0a5 5 0 1 0-10 0m-4.25 3L8 9l1.25 6");
}
</style><g class="hntgybcog"><path class="ov7gzkbwx"/><path class="svldow8wg"/><path class="mj2w05jsa"/></g>`,
		"fallback": "uix:coverage-overlap",
	});
}

export default Component;
