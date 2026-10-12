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
		"content": `<style>.ayrj938-v {
  width: 11px;
  height: 15.25px;
  x: 6.5px;
  y: 6px;
  rx: 4px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.swk726baw {
  d: path("M9.75 2.75h4.5m-2.25 0V6m-2 4.75v6m4-6v6m-4-3h4");
}
</style><g class="hntgybcog"><rect class="ayrj938-v"/><path class="swk726baw"/></g>`,
		"fallback": "iconoven:hydrogen-tank",
	});
}

export default Component;
