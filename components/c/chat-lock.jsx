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
		"content": `<style>.gy_h5zejw {
  d: path("M11.25 9.25h1.5A1.75 1.75 0 0 1 14.5 11v.25A1.75 1.75 0 0 1 12.75 13h-1.5a1.75 1.75 0 0 1-1.75-1.75V11a1.75 1.75 0 0 1 1.75-1.75m-.75 0v-1a1.5 1.5 0 0 1 3 0v1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wxoo7k3or {
  d: path("M4 6a2.5 2.5 0 0 1 2.5-2.5h11A2.5 2.5 0 0 1 20 6v8a2.5 2.5 0 0 1-2.5 2.5H11L7 20v-3.5h-.5A2.5 2.5 0 0 1 4 14Z");
}
</style><g class="hntgybcog"><path class="wxoo7k3or"/><path class="gy_h5zejw"/></g>`,
		"fallback": "uix:chat-lock",
	});
}

export default Component;
