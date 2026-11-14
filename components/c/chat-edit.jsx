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

.rv6zw7bhn {
  d: path("M15.536 5.964za1 1 0 0 1 0 1.415l-4.629 4.628a1.5 1.5 0 0 1-.767.41l-.438.088a.6.6 0 0 1-.707-.707l.088-.438a1.5 1.5 0 0 1 .41-.767l4.628-4.629a1 1 0 0 1 1.415 0");
}

.wxoo7k3or {
  d: path("M4 6a2.5 2.5 0 0 1 2.5-2.5h11A2.5 2.5 0 0 1 20 6v8a2.5 2.5 0 0 1-2.5 2.5H11L7 20v-3.5h-.5A2.5 2.5 0 0 1 4 14Z");
}
</style><g class="hntgybcog"><path class="wxoo7k3or"/><path class="rv6zw7bhn"/></g>`,
		"fallback": "uix:chat-edit",
	});
}

export default Component;
