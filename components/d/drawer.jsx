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
		"content": `<style>.g-nttibir {
  d: path("M3.25 8.75h17.5m-17.5 5.5h17.5M10.5 6h3m-3 5.5h3m-3 5.4h3M6 19.5v1.75m12-1.75v1.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ywc7vmbge {
  width: 17.5px;
  height: 16.25px;
  x: 3.25px;
  y: 3.25px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="ywc7vmbge"/><path class="g-nttibir"/></g>`,
		"fallback": "iconoven:drawer",
	});
}

export default Component;
