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
		"content": `<style>.fgt9-nb-i {
  d: path("M7 3h10a3.5 3.5 0 0 1 3.5 3.5v11A3.5 3.5 0 0 1 17 21H7a3.5 3.5 0 0 1-3.5-3.5v-11A3.5 3.5 0 0 1 7 3m-.5 3.5h3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qf020sagy {
  d: path("M9.75 9.25h4.5A1.75 1.75 0 0 1 16 11v2a1.75 1.75 0 0 1-1.75 1.75h-4.5A1.75 1.75 0 0 1 8 13v-2a1.75 1.75 0 0 1 1.75-1.75M9 18h6");
}
</style><g class="hntgybcog"><path class="fgt9-nb-i"/><path class="qf020sagy"/></g>`,
		"fallback": "uix:element-americium",
	});
}

export default Component;
