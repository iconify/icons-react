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

.n3yxz5bss {
  d: path("M4 14c0-6 16-6 16 0M4 17.75h16M6.5 2.5l2 1.5l2-1.5V5a2 2 0 0 1-4 0Zm2 4.5v7m5-11.5l2 1.5l2-1.5V5a2 2 0 0 1-4 0Zm2 4.5v7");
}

.rkn7f0b6i {
  d: path("M5.278 14h13.444a1.75 1.75 0 0 1 1.691 2.201l-1.067 4a1.75 1.75 0 0 1-1.69 1.299H6.344a1.75 1.75 0 0 1-1.69-1.299l-1.067-4A1.75 1.75 0 0 1 5.278 14");
}
</style><g class="hntgybcog"><path class="rkn7f0b6i"/><path class="n3yxz5bss"/></g>`,
		"fallback": "uix:flower-basket",
	});
}

export default Component;
