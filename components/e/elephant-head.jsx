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
		"content": `<style>.gpwm9kbzp {
  d: path("M8.75 6C4 3.5 2.25 6.5 2.5 10s3 5 6.5 2.25M15.25 6c4.75-2.5 6.5.5 6.25 4s-3 5-6.5 2.25m-4.5-3.5h.01m2.99 0h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sql0-iz5y {
  d: path("M8.25 11c0-5 1.5-7.5 3.75-7.5S15.75 6 15.75 11L12 13.25ZM12 13.25v5.25c0 2.25 3 2.75 3.75.75");
}
</style><g class="hntgybcog"><path class="sql0-iz5y"/><path class="gpwm9kbzp"/></g>`,
		"fallback": "uix:elephant-head",
	});
}

export default Component;
