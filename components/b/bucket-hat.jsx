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
		"content": `<style>.exsj28bkx {
  d: path("M7 13h10l4 4c-4 1.75-14 1.75-18 0Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y3lmnqbrv {
  d: path("m7.473 9.97l.43-2.75A2.625 2.625 0 0 1 10.497 5h3.006a2.625 2.625 0 0 1 2.594 2.22l.43 2.75A2.625 2.625 0 0 1 13.933 13h-3.866a2.625 2.625 0 0 1-2.594-3.03");
}
</style><g class="hntgybcog"><path class="y3lmnqbrv"/><path class="exsj28bkx"/></g>`,
		"fallback": "uix:bucket-hat",
	});
}

export default Component;
