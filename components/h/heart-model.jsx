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
		"content": `<style>.fk48yebxv {
  d: path("M13.5 7.25V5.5a2.25 2.25 0 0 1 4.5 0v1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ru9euccgt {
  d: path("M7 9c-2 2-2 6 1 9q2.25 2.25 4.5 3c3-1.5 6.5-5 6.5-9.5c0-3-2-4.5-4-4.5c-1.25 0-2.25.5-3 1.25c-1-1-3.5-.75-5 .75m2.5-1V3");
}
</style><g class="hntgybcog"><path class="ru9euccgt"/><path class="fk48yebxv"/></g>`,
		"fallback": "uix:heart-model",
	});
}

export default Component;
