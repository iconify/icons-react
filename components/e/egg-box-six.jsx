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

.vcly1bc9l {
  d: path("M4.25 10.5a1.75 4.5 0 0 1 3.5 0m2.5 0a1.75 4.5 0 0 1 3.5 0m2.5 0a1.75 4.5 0 0 1 3.5 0M6.5 14.25h11");
}

.yh3olpbzx {
  d: path("M4.778 10.5h14.444a1.75 1.75 0 0 1 1.691 2.201l-1.067 4A1.75 1.75 0 0 1 18.156 18H5.844a1.75 1.75 0 0 1-1.69-1.299l-1.067-4A1.75 1.75 0 0 1 4.778 10.5");
}
</style><g class="hntgybcog"><path class="yh3olpbzx"/><path class="vcly1bc9l"/></g>`,
		"fallback": "uix:egg-box-six",
	});
}

export default Component;
