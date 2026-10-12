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

.m10ymsugb {
  cx: 12px;
  cy: 12px;
  r: 3.5px;
}

.n_onqjb7x {
  d: path("M12.5 3.5c3 0 4.5 2 5.75 3.25S21 10 21 12.25c0 3.75-3.25 7.25-8 7.25c-2 0-3.25 1.25-5.25 1.25c-2.5 0-4.25-1.75-4.25-4.5c0-2 .75-3 .75-5.25c0-4 4-7.5 8.25-7.5");
}
</style><g class="hntgybcog"><path class="n_onqjb7x"/><circle class="m10ymsugb"/></g>`,
		"fallback": "iconoven:fried-egg",
	});
}

export default Component;
