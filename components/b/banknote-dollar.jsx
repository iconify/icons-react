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

.rqz9sab4q {
  d: path("M14.75 9.25c-.4-1-1.5-1.75-2.75-1.75c-1.6 0-2.75.9-2.75 2.15c0 2.85 5.75 1.6 5.75 4.65c0 1.3-1.25 2.2-3 2.2c-1.35 0-2.5-.75-3-1.75m3-9V7.5m0 9v1.75");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="rqz9sab4q"/></g>`,
		"fallback": "iconoven:banknote-dollar",
	});
}

export default Component;
