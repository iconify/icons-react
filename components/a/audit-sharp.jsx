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
		"content": `<style>.n0441lbkh {
  d: path("M9.5 21.25H4.75v-17h4m6.5 0h4V9.5");
}

.wfqdf5kbq {
  cx: 15.75px;
  cy: 15.75px;
  r: 3px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xis7zt0ek {
  d: path("m18 18l3 3");
}

.yqydcsa_v {
  d: path("M8.75 2.75h6.5v3.5h-6.5zM8.25 10h2.5m-2.5 3.25h2.5");
}
</style><g class="x2cwu0gfd"><path class="n0441lbkh"/><path class="yqydcsa_v"/><circle class="wfqdf5kbq"/><path class="xis7zt0ek"/></g>`,
		"fallback": "iconoven:audit-sharp",
	});
}

export default Component;
