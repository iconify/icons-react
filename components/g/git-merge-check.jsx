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
		"content": `<style>.df-l_obbh {
  d: path("M14.75 5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m-11 14a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M6 2.5v14.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vphrv8b8n {
  d: path("M17 7.25V8a6 6 0 0 1-6 6H6m8.75 4l2 2L21 15.75");
}
</style><g class="hntgybcog"><path class="df-l_obbh"/><path class="vphrv8b8n"/></g>`,
		"fallback": "uix:git-merge-check",
	});
}

export default Component;
