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
		"content": `<style>.gv6ht1_st {
  d: path("m7 16l3-2.5L12.5 5l2.5 7.5l3.5-3m-.5 5.25v3.5M18 21h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wc23aqbga {
  d: path("M3.5 3v17.5H13");
}
</style><g class="hntgybcog"><path class="wc23aqbga"/><path class="gv6ht1_st"/></g>`,
		"fallback": "uix:cost-anomaly",
	});
}

export default Component;
