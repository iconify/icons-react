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
		"content": `<style>.fy6sm_nnl {
  d: path("M2.5 12a8.5 8.5 0 1 0 17 0a8.5 8.5 0 1 0-17 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j9ghz5b9z {
  d: path("m10.734 8.395l-2.391 2.988A.841.841 0 0 0 9 12.75a1.42 1.42 0 0 1 1.389 1.712l-.139.663a.578.578 0 0 0 1.016.48l2.391-2.988A.841.841 0 0 0 13 11.25a1.42 1.42 0 0 1-1.389-1.712l.139-.663a.578.578 0 0 0-1.016-.48");
}

.to_-cu-0k {
  d: path("M11 3.5h2a8.5 8.5 0 0 1 0 17h-2");
}
</style><g class="hntgybcog"><path class="fy6sm_nnl"/><path class="to_-cu-0k"/><path class="j9ghz5b9z"/></g>`,
		"fallback": "uix:energy-cost",
	});
}

export default Component;
