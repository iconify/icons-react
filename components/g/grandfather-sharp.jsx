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
		"content": `<style>.lb1jk9b-j {
  cx: 9px;
  cy: 7.5px;
  r: 3.5px;
}

.t7i5t62vv {
  d: path("m7.25 9l1.25-.5m2.25.5L9.5 8.5M2.75 21.25v-1.5a6.25 6.25 0 0 1 12.5 0v1.5Zm16.5 0V9.5h-4v2.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="lb1jk9b-j"/><path class="t7i5t62vv"/></g>`,
		"fallback": "iconoven:grandfather-sharp",
	});
}

export default Component;
