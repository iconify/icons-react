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

.la3o9w5_l {
  d: path("M4.5 13h-2V9.5A1.5 1.5 0 0 1 4 8h2l2.25-4A2 2 0 0 1 10 3h4a2 2 0 0 1 1.75 1L18 8h2a1.5 1.5 0 0 1 1.5 1.5V13H18m-4 0H8.5");
}

.lnonmyajt {
  d: path("M4.5 13a2 2 0 1 0 4 0a2 2 0 1 0-4 0m9.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M6 8h12m-1.936 10.936l.747-.747a1.5 1.5 0 0 1 1.06-.439h2.379a1.5 1.5 0 0 1 1.5 1.5v1.25a1.5 1.5 0 0 1-1.5 1.5h-2.43a1.5 1.5 0 0 1-.996-.379L16.125 21a1.42 1.42 0 0 1-.061-2.064M19 20h.01");
}
</style><g class="hntgybcog"><path class="la3o9w5_l"/><path class="lnonmyajt"/></g>`,
		"fallback": "uix:car-for-sale",
	});
}

export default Component;
