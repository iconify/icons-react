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

.qhvx1g3lp {
  d: path("M12 14.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m1 2.25l-1.25 3.5m4.25-3.5l1.25 3.5");
}

.t1d0ypb-c {
  d: path("M3 20.75v-12c0-2.5 1.5-4 4-4.5l2.5-1q2.5 2.5 5 0l2.5 1c2.5.5 4 2 4 4.5v12M7 4.25L14.75 12M3.5 6.5L12 15");
}
</style><g class="hntgybcog"><path class="t1d0ypb-c"/><path class="qhvx1g3lp"/></g>`,
		"fallback": "uix:ceremonial-sash",
	});
}

export default Component;
