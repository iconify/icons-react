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

.t97og4b8d {
  d: path("m8.5 6.75l3.5 5v5.75m0-5.75l3.5-5m-6.75 5h6.5m-6.5 3h6.5");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="t97og4b8d"/></g>`,
		"fallback": "iconoven:currency-yen",
	});
}

export default Component;
