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

.r867m6btl {
  d: path("M2.75 6a1.25 1.25 0 0 1 2.5 0v4.75h13.5a2.5 2.5 0 0 1 2.5 2.5v4.5H2.75Zm2.5 11.75v2.5m13.5-2.5v2.5");
}

.zgw-15b1u {
  width: 5.5px;
  height: 2.75px;
  x: 7.75px;
  y: 5.5px;
  rx: 1.25px;
}

.zjrafwhbi {
  d: path("M5.25 14.25h16");
}
</style><g class="hntgybcog"><path class="r867m6btl"/><rect class="zgw-15b1u"/><path class="zjrafwhbi"/></g>`,
		"fallback": "iconoven:bed",
	});
}

export default Component;
