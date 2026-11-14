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
		"content": `<style>.dm8932bfa {
  d: path("M7 5.5h10A3.5 3.5 0 0 1 20.5 9v2.5A3.5 3.5 0 0 1 17 15H7a3.5 3.5 0 0 1-3.5-3.5V9A3.5 3.5 0 0 1 7 5.5m-4.5 13h19");
}

.g2dxp65no {
  d: path("m9 5.5l3 3.25l3-3.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="dm8932bfa"/><path class="g2dxp65no"/></g>`,
		"fallback": "uix:dry-flat",
	});
}

export default Component;
