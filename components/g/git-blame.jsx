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
		"content": `<style>.a7b1c27vx {
  d: path("M15.25 8h3m-3 4h3m-3 4H17");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ihd60yf_v {
  width: 9px;
  height: 18.5px;
  x: 12.25px;
  y: 2.75px;
  rx: 2.5px;
}

.lh3a2fbrj {
  d: path("M2.75 16.75a3.5 3.5 0 0 1 7 0v.5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1Z");
}

.ubdgkljhz {
  cx: 6.25px;
  cy: 8px;
  r: 2.5px;
}
</style><g class="hntgybcog"><circle class="ubdgkljhz"/><path class="lh3a2fbrj"/><rect class="ihd60yf_v"/><path class="a7b1c27vx"/></g>`,
		"fallback": "iconoven:git-blame",
	});
}

export default Component;
