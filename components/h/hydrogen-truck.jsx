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

.kh6cjybjd {
  d: path("M2.5 14.5h19V10l-3-3.5h-4v8");
}

.qp1iy7smw {
  d: path("M5.5 5.5h3a3 3 0 0 1 3 3a3 3 0 0 1-3 3h-3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m-.5 11a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="kh6cjybjd"/><path class="qp1iy7smw"/></g>`,
		"fallback": "uix:hydrogen-truck",
	});
}

export default Component;
