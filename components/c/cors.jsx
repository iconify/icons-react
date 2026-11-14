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
		"content": `<style>.d0ujz0t8h {
  d: path("m18 12.5l3 3l-3 3m3-13c-7 0-11 10-18 10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xrya6b7bx {
  d: path("m6 12.5l-3 3l3 3");
}

.ynmf86nsn {
  d: path("M3 5.5c7 0 11 10 18 10");
}
</style><g class="hntgybcog"><path class="ynmf86nsn"/><path class="d0ujz0t8h"/><path class="xrya6b7bx"/></g>`,
		"fallback": "uix:cors",
	});
}

export default Component;
