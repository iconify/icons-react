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
		"content": `<style>.aqmj_4big {
  width: 18.5px;
  height: 18.5px;
  x: 2.75px;
  y: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 3px;
}

.avgfny3xz {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 14.5a1.5 1.5 0 0 1 3 0m0 0a1.5 1.5 0 0 1 3 0");
}

.fl8ls8bxt {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10.5 10.75h.01m2.99 0h.01");
}

.xzo7fxm-w {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6 6l2 2M6.5 8H8V6.5M18 6l-2 2m0-1.5V8h1.5M6 18l2-2m-1.5 0H8v1.5m10 .5l-2-2m0 1.5V16h1.5");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="aqmj_4big"/><path class="xzo7fxm-w"/><path class="fl8ls8bxt"/><path class="avgfny3xz"/></g>`,
		"fallback": "iconoven:assembly-point",
	});
}

export default Component;
