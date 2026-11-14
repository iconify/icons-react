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
		"content": `<style>.ee_e3-wai {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20.5h18m-14.5 0v-6m5 6v-10m5 10v-17m1.789.894l.211.106a1.118 1.118 0 0 1 0 2l-.211.106A1.236 1.236 0 0 1 16.5 5.5a1.236 1.236 0 0 1 1.789-1.106");
}
</style><path class="ee_e3-wai"/>`,
		"fallback": "uix:analytics-goal",
	});
}

export default Component;
