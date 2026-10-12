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
		"content": `<style>.bfxoxdbjh {
  width: 12px;
  height: 11.5px;
  x: 3.75px;
  y: 9.25px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qhipurbtq {
  d: path("M15.75 11.75h1.5a2.5 2.5 0 0 1 0 5h-1.5M8.25 13v4.25m3-4.25v4.25m-3.5-14q-1 1.5 0 3m4-3q-1 1.5 0 3");
}
</style><g class="hntgybcog"><rect class="bfxoxdbjh"/><path class="qhipurbtq"/></g>`,
		"fallback": "iconoven:break-time",
	});
}

export default Component;
