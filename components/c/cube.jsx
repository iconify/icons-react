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

.o5j9qr5sk {
  d: path("m12.854 2.977l6.75 3.772a1.75 1.75 0 0 1 .896 1.528v7.446a1.75 1.75 0 0 1-.896 1.528l-6.75 3.772a1.75 1.75 0 0 1-1.708 0l-6.75-3.772a1.75 1.75 0 0 1-.896-1.528V8.277a1.75 1.75 0 0 1 .896-1.528l6.75-3.772a1.75 1.75 0 0 1 1.708 0");
}

.znd7msbjk {
  d: path("M3.5 7.25L12 12l8.5-4.75M12 12v9.5");
}
</style><g class="hntgybcog"><path class="o5j9qr5sk"/><path class="znd7msbjk"/></g>`,
		"fallback": "uix:cube",
	});
}

export default Component;
