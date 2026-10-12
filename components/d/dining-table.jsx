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
		"content": `<style>.h4f5t265p {
  width: 18.5px;
  height: 3.5px;
  x: 2.75px;
  y: 5.75px;
  rx: 1.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q63jtt1th {
  d: path("M5.5 9.25v12m13-12v12m-13-6h13");
}
</style><g class="hntgybcog"><rect class="h4f5t265p"/><path class="q63jtt1th"/></g>`,
		"fallback": "iconoven:dining-table",
	});
}

export default Component;
