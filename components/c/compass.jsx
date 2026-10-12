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

.n-jgu0lcs {
  d: path("m15.69 8.68l-1.88 4.14q-.31.68-.99.99l-4.14 1.88q-.68.31-.37-.37l1.88-4.14q.31-.68.99-.99l4.14-1.88q.68-.31.37.37");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="n-jgu0lcs"/></g>`,
		"fallback": "iconoven:compass",
	});
}

export default Component;
