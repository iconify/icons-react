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
		"content": `<style>.gb2dchccy {
  d: path("M7.5 6h9q1.25 0 1.6 1.2l2.8 9.6q.35 1.2-.9 1.2H4q-1.25 0-.9-1.2l2.8-9.6Q6.25 6 7.5 6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.piwb11bvl {
  d: path("M6 12.5a2.75 1.5 0 1 0 5.5 0a2.75 1.5 0 1 0-5.5 0m6.5 0a2.75 1.5 0 1 0 5.5 0a2.75 1.5 0 1 0-5.5 0m-7 5.5v2.75m4-2.75v2.75m5-2.75v2.75m4-2.75v2.75");
}
</style><g class="hntgybcog"><path class="gb2dchccy"/><path class="piwb11bvl"/></g>`,
		"fallback": "iconoven:dastarkhwan",
	});
}

export default Component;
