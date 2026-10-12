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
		"content": `<style>.as5ppz0sm {
  width: 12.5px;
  height: 6px;
  x: 2.75px;
  y: 9px;
  rx: 1.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oi9sw218u {
  d: path("M7 9v6m4-6v6m4.25-3h2.5a2.5 2.5 0 0 0 2.5-2.5V4.75");
}
</style><g class="hntgybcog"><rect class="as5ppz0sm"/><path class="oi9sw218u"/></g>`,
		"fallback": "iconoven:conduit-pipe",
	});
}

export default Component;
