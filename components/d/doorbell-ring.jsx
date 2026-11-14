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

.jodmoyj1m {
  d: path("M9.75 14.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}

.q5_oe8b1y {
  d: path("M12 2.5za5 5 0 0 1 5 5v9a5 5 0 0 1-5 5a5 5 0 0 1-5-5v-9a5 5 0 0 1 5-5M10.5 7h3");
}
</style><g class="hntgybcog"><path class="q5_oe8b1y"/><path class="jodmoyj1m"/></g>`,
		"fallback": "uix:doorbell-ring",
	});
}

export default Component;
