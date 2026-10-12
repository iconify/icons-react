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
		"content": `<style>.cjbbvacfn {
  d: path("M17.16 5.38a9 9 0 0 1 3.81 6.59");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l_x8y5bhw {
  d: path("M13.5 6V4.25a1.5 1.5 0 0 0-3 0V6a1.5 1.5 0 0 0 3 0m3.6 11.42l1.51.88a1.5 1.5 0 0 0 1.5-2.6l-1.51-.87a1.5 1.5 0 0 0-1.5 2.59M5.4 14.83l-1.51.87a1.5 1.5 0 0 0 1.5 2.6l1.51-.88a1.5 1.5 0 0 0-1.5-2.59");
}

.lcc5z2bbq {
  cx: 12px;
  cy: 12.75px;
  r: 1.75px;
}
</style><g class="hntgybcog"><path class="l_x8y5bhw"/><circle class="lcc5z2bbq"/><path class="cjbbvacfn"/></g>`,
		"fallback": "iconoven:centrifuge",
	});
}

export default Component;
