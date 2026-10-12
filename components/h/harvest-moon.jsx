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

.uo05mphwy {
  cx: 15px;
  cy: 8.25px;
  r: 5.5px;
}

.zlg7j4yqv {
  d: path("M6.5 21.25V10.5M2.75 21.25h18.5M6.5 9.5q2.5-2.5 0-5q-2.5 2.5 0 5m0 4q.04-2.79-2.75-2.75q-.04 2.79 2.75 2.75m0 0q2.79.04 2.75-2.75q-2.79-.04-2.75 2.75");
}
</style><g class="hntgybcog"><circle class="uo05mphwy"/><path class="zlg7j4yqv"/></g>`,
		"fallback": "iconoven:harvest-moon",
	});
}

export default Component;
