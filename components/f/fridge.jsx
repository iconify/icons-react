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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.upddb4dxn {
  width: 13.5px;
  height: 18.5px;
  x: 5.25px;
  y: 2.75px;
  rx: 2.5px;
}

.xqped6bzg {
  d: path("M5.25 9.75h13.5m-10-4.5v2m0 5.5v3");
}
</style><g class="hntgybcog"><rect class="upddb4dxn"/><path class="xqped6bzg"/></g>`,
		"fallback": "iconoven:fridge",
	});
}

export default Component;
