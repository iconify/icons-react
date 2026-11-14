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
		"content": `<style>.f-l927b5x {
  d: path("M5 9.5L7.5 12L5 14.5M15.75 7h5.75m-5.75 5h5.75m-5.75 5h5.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uwcis0kyt {
  d: path("M10.125 7za2.625 2.625 0 0 1 2.625 2.625v4.75A2.625 2.625 0 0 1 10.125 17A2.625 2.625 0 0 1 7.5 14.375v-4.75A2.625 2.625 0 0 1 10.125 7M2.5 12h5");
}
</style><g class="hntgybcog"><path class="uwcis0kyt"/><path class="f-l927b5x"/></g>`,
		"fallback": "uix:decoder",
	});
}

export default Component;
