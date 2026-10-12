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
		"content": `<style>.a6kjpy2nm {
  d: path("M7 9.5c3.25 0 4-4.5 7.5-5.25c2-.4 3.5-.5 5.75-.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qjl7f_l8d {
  d: path("M3.75 3.75v14.5a2 2 0 0 0 2 2h14.5M8 16.75V13.5m4 3.25V11.5m4 5.25v-2.5");
}
</style><g class="hntgybcog"><path class="qjl7f_l8d"/><path class="a6kjpy2nm"/></g>`,
		"fallback": "iconoven:cumulative-chart",
	});
}

export default Component;
