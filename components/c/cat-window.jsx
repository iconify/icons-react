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

.j84u50tal {
  d: path("M8 21.5c0-4 1-5.5 2-6L9.5 12l1.75 1.75h1.5L14.5 12l-.5 3.5c1 .5 2 2 2 6");
}

.qta_sh28q {
  d: path("M7 2.5h10A3.5 3.5 0 0 1 20.5 6v12a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 18V6A3.5 3.5 0 0 1 7 2.5M3.5 9h17M12 2.5V9");
}
</style><g class="hntgybcog"><path class="qta_sh28q"/><path class="j84u50tal"/></g>`,
		"fallback": "uix:cat-window",
	});
}

export default Component;
