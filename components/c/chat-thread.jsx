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

.lu9fy9npg {
  d: path("M2.75 5.75a2.5 2.5 0 0 1 2.5-2.5h8.5a2.5 2.5 0 0 1 2.5 2.5v3.5a2.5 2.5 0 0 1-2.5 2.5h-8.5a2.5 2.5 0 0 1-2.5-2.5Zm3.5 1.75h6.5M6.5 11.75v3.75a2 2 0 0 0 2 2h.75");
}

.q11paq8vk {
  width: 12px;
  height: 6.5px;
  x: 9.25px;
  y: 14.25px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><path class="lu9fy9npg"/><rect class="q11paq8vk"/></g>`,
		"fallback": "iconoven:chat-thread",
	});
}

export default Component;
