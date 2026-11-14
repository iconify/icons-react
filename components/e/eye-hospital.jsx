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
		"content": `<style>.e4tgec9pv {
  d: path("M5.5 15.75c2.5-4.25 10.5-4.25 13 0C16 20 8 20 5.5 15.75m6.5 0h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pjlklyebz {
  d: path("M2.5 21.5V9H7V2.5h10V9h4.5v12.5ZM12 5.25v4m-2-2h4");
}
</style><g class="hntgybcog"><path class="pjlklyebz"/><path class="e4tgec9pv"/></g>`,
		"fallback": "uix:eye-hospital",
	});
}

export default Component;
