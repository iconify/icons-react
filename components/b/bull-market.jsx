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
		"content": `<style>.fk62mkb-e {
  d: path("M5.25 12.5C2.5 11.5 2 6 7.5 4.75m11.25 7.75C21.5 11.5 22 6 16.5 4.75M8.25 17.5l2.5-2.5l2 2l3-3m-2.5 0h2.5v2.5");
}

.hntgybcog {
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
</style><g class="hntgybcog"><rect class="idefk2byg"/><path class="fk62mkb-e"/></g>`,
		"fallback": "iconoven:bull-market",
	});
}

export default Component;
