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

.la5qfrrxr {
  width: 18.5px;
  height: 13.5px;
  x: 2.75px;
  y: 5.25px;
  rx: 2.5px;
}

.lmoc36boq {
  d: path("M8 10.5V12h1.25M13 9.75h5m-5 2.5h5m-5 2.5h3");
}

.yitct_buo {
  cx: 8px;
  cy: 12px;
  r: 3px;
}
</style><g class="hntgybcog"><rect class="la5qfrrxr"/><circle class="yitct_buo"/><path class="lmoc36boq"/></g>`,
		"fallback": "iconoven:appointment-card",
	});
}

export default Component;
