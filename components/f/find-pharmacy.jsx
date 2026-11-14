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

.r470zbg-b {
  d: path("M12 21.5S4.5 15 4.5 9.5a7.5 7.5 0 0 1 15 0c0 5.5-7.5 12-7.5 12");
}

.rg3xo0-0b {
  d: path("M8 9h8c0 2.5-1.75 4-4 4s-4-1.5-4-4m4.75 0L15 5.5m-4.5 9.25h3");
}
</style><g class="hntgybcog"><path class="r470zbg-b"/><path class="rg3xo0-0b"/></g>`,
		"fallback": "uix:find-pharmacy",
	});
}

export default Component;
