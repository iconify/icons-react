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
		"content": `<style>.dnxlbibxc {
  d: path("M2.75 21.25v-3.5C5.5 15.5 8.25 14.5 11 14.5c4 0 6.5 2.5 10.25 3v3.75ZM15.5 15V8m0 4.5H14a1.25 1.25 0 0 1-1.25-1.25V10m2.75 1H17a1.25 1.25 0 0 0 1.25-1.25V9");
}

.h9w27gbpu {
  cx: 6.75px;
  cy: 7px;
  r: 2.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="dnxlbibxc"/><circle class="h9w27gbpu"/></g>`,
		"fallback": "iconoven:desert",
	});
}

export default Component;
