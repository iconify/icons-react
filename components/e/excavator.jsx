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
		"content": `<style>.g-1-t1bbf {
  d: path("M17.5 10.25h3.75V12a2.75 2.75 0 0 1-2.75 2.75h-1Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m-o1ggpmj {
  width: 12.5px;
  height: 4.5px;
  x: 2.75px;
  y: 16.75px;
  rx: 2.25px;
}

.wrqzp2bze {
  d: path("M5.5 19h7m-8.75-2.25v-7a1.5 1.5 0 0 1 1.5-1.5h3.6a1.5 1.5 0 0 1 1.3.75l2.6 4.5v3.25Zm0 0h9M6 11.25h3m3.75 1.5l3.75-7.5l3.75 5");
}
</style><g class="hntgybcog"><rect class="m-o1ggpmj"/><path class="wrqzp2bze"/><path class="g-1-t1bbf"/></g>`,
		"fallback": "iconoven:excavator",
	});
}

export default Component;
