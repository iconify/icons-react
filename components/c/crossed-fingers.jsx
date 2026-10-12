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
		"content": `<style>.ayar2fnkf {
  d: path("M9 16.5h6m-.5-3.5l-5-8m0 8l5-8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qr_6dff5e {
  width: 12px;
  height: 7px;
  x: 6px;
  y: 13px;
  rx: 3px;
}
</style><g class="hntgybcog"><rect class="qr_6dff5e"/><path class="ayar2fnkf"/></g>`,
		"fallback": "iconoven:crossed-fingers",
	});
}

export default Component;
