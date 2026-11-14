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

.jge08ptjh {
  d: path("M7.25 9.75a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m13 6.25c-.25-.6-1.05-1-2.25-1c-1.25 0-2.25.6-2.25 1.5c0 2 4.5 1 4.5 3c0 .9-1 1.5-2.25 1.5c-1.2 0-2-.4-2.25-1M18 13.75V15m0 6v1");
}

.znff25bsj {
  d: path("M2.5 9.75C4 6.5 6.6 4.5 9.75 4.5s5.75 2 7.25 5.25C15.5 13 12.9 15 9.75 15S4 13 2.5 9.75");
}
</style><g class="hntgybcog"><path class="znff25bsj"/><path class="jge08ptjh"/></g>`,
		"fallback": "uix:eye-dollar",
	});
}

export default Component;
