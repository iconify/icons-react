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

.o3k2dhwru {
  width: 4px;
  height: 6.75px;
  x: 10px;
  y: 4.75px;
  rx: 0.5px;
}

.tl4nj2r-y {
  d: path("M14.5 17.25H18");
}

.uvf6hsb-x {
  d: path("M2.75 9.25h18.5");
}

.wukcdvqgk {
  width: 18.5px;
  height: 16.5px;
  x: 2.75px;
  y: 4.75px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><rect class="wukcdvqgk"/><path class="uvf6hsb-x"/><rect class="o3k2dhwru"/><path class="tl4nj2r-y"/></g>`,
		"fallback": "iconoven:box-open",
	});
}

export default Component;
