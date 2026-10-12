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
		"content": `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zip0z1qjd {
  d: path("M10 17.75V6.25h6m-6 5h5m-7.25 3.5H13");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="zip0z1qjd"/></g>`,
		"fallback": "iconoven:currency-franc",
	});
}

export default Component;
