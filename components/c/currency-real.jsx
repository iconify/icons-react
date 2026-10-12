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

.jk70_-b-o {
  d: path("M7 15.5v-7h1.25a1.85 1.85 0 0 1 0 3.7H7m2.5 0l1 3.3m6.02-6.12A1.75 1.75 0 1 0 15 12a1.75 1.75 0 1 1-1.52 2.62M15 7v1.5m0 7V17");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="jk70_-b-o"/></g>`,
		"fallback": "iconoven:currency-real",
	});
}

export default Component;
