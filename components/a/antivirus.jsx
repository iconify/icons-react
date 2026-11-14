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
		"content": `<style>.ctmcg-tip {
  d: path("m12 2.5l7.5 2.75V11c0 5-3.25 8.5-7.5 10.5c-4.25-2-7.5-5.5-7.5-10.5V5.25Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w44hy-b2c {
  d: path("M9.5 11.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m4.25-1.75l1-1m-1 4.5l1 1m-4.5-4.5l-1-1m1 4.5l-1 1m5.25-2.75H16m-6.5 0H8");
}
</style><g class="hntgybcog"><path class="ctmcg-tip"/><path class="w44hy-b2c"/></g>`,
		"fallback": "uix:antivirus",
	});
}

export default Component;
