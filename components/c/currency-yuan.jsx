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

.wnvzk4c5x {
  d: path("M8.25 7.5h7.5M7 11h10m-6.75 0c0 3.25-.75 5-2.75 6.25M13.75 11v4.75A1.25 1.25 0 0 0 15 17h2");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="wnvzk4c5x"/></g>`,
		"fallback": "iconoven:currency-yuan",
	});
}

export default Component;
