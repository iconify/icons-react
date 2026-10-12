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

.n5-az9_hh {
  d: path("M10 6.5v11m6-11L10 12l6 5.5M7.25 12h8");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="n5-az9_hh"/></g>`,
		"fallback": "iconoven:currency-kip",
	});
}

export default Component;
