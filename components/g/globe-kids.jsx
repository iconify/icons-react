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

.qnm1x4ddu {
  d: path("M9 9.5a3 6.5 0 1 0 6 0a3 6.5 0 1 0-6 0m-3.5 0h13M12 16v4.5m-4 0h8");
}

.r7bsc7b6t {
  d: path("M5.5 9.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0");
}
</style><g class="hntgybcog"><path class="r7bsc7b6t"/><path class="qnm1x4ddu"/></g>`,
		"fallback": "uix:globe-kids",
	});
}

export default Component;
