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
		"content": `<style>.e0tw9nfah {
  d: path("M7.75 7h8.5a5.25 5.25 0 0 1 5.25 5.25v.5A5.25 5.25 0 0 1 16.25 18h-8.5a5.25 5.25 0 0 1-5.25-5.25v-.5A5.25 5.25 0 0 1 7.75 7M15 7V4.75h4V7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zsx9s7svv {
  d: path("M9.25 12.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0");
}
</style><g class="hntgybcog"><path class="e0tw9nfah"/><path class="zsx9s7svv"/></g>`,
		"fallback": "uix:camera-compact",
	});
}

export default Component;
