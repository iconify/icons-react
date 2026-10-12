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
		"content": `<style>.ayo2gghbq {
  d: path("M2.75 6.75h14m-8.5 8.75a3.5 3.5 0 0 0 3.5 3.5h9m-2.25-2.25L20.75 19l-2.25 2.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xk-oyj3fb {
  width: 14px;
  height: 10.5px;
  x: 2.75px;
  y: 2.75px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="xk-oyj3fb"/><path class="ayo2gghbq"/></g>`,
		"fallback": "iconoven:direct-debit",
	});
}

export default Component;
