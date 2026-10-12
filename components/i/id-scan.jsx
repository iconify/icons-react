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
		"content": `<style>.h16qlybxm {
  d: path("M15.75 17.5L17 18.75l2.25-2.5");
}

.hk4_ptb-x {
  cx: 17.5px;
  cy: 17.5px;
  r: 3.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q7h42p7rq {
  d: path("M10 8.5a2 2 0 1 1-4 0a2 2 0 1 1 4 0M5.5 14c.5-1.4 1.4-2 2.5-2s2 .6 2.5 2M13 8h4.5");
}

.u4_9fcb4o {
  width: 18.5px;
  height: 13.5px;
  x: 2.75px;
  y: 3.75px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="u4_9fcb4o"/><path class="q7h42p7rq"/><circle class="hk4_ptb-x"/><path class="h16qlybxm"/></g>`,
		"fallback": "iconoven:id-scan",
	});
}

export default Component;
