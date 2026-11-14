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
		"content": `<style>.mnoo9ofmq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.959 18H2.5V8.5L6.75 4v4.5L11 4v4.5L15.25 4v4.5L19.5 4v8.841m-.676 3.141l1.5 2.812A1.5 1.5 0 0 1 19 21h-3a1.5 1.5 0 0 1-1.324-2.206l1.5-2.812a1.5 1.5 0 0 1 2.648 0M17.5 17v1.75");
}
</style><path class="mnoo9ofmq"/>`,
		"fallback": "uix:factory-alert",
	});
}

export default Component;
