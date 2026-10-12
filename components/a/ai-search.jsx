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
		"content": `<style>.de-nvpb2c {
  d: path("m18.4 18.4l2.85 2.85");
}

.eq5uxcb1m {
  width: 12.5px;
  height: 17px;
  x: 3.75px;
  y: 2.75px;
  rx: 2.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.t6u2r9bql {
  cx: 16px;
  cy: 16px;
  r: 3.25px;
}

.ubz8hc38d {
  d: path("M7.25 7h5.5m-5.5 3.5h3.5");
}
</style><g class="hntgybcog"><rect class="eq5uxcb1m"/><path class="ubz8hc38d"/><circle class="t6u2r9bql"/><path class="de-nvpb2c"/></g>`,
		"fallback": "iconoven:ai-search",
	});
}

export default Component;
