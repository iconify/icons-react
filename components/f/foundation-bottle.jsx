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

.idefk2byg {
  width: 13.5px;
  height: 11.5px;
  x: 5.25px;
  y: 9.75px;
  rx: 2.5px;
}

.ouj8_h6ip {
  d: path("M7.5 15c1.5-.75 3 .75 4.5 0s3-.75 4.5 0");
}

.rvju9hbwv {
  width: 6px;
  height: 4px;
  x: 9px;
  y: 2.75px;
  rx: 1.25px;
}
</style><g class="hntgybcog"><rect class="rvju9hbwv"/><rect class="idefk2byg"/><path class="ouj8_h6ip"/></g>`,
		"fallback": "iconoven:foundation-bottle",
	});
}

export default Component;
