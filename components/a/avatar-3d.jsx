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
		"content": `<style>.blpc74b5x {
  d: path("m12.723 2.898l3.5 1.925A1.5 1.5 0 0 1 17 6.137v3.976a1.5 1.5 0 0 1-.777 1.314l-3.5 1.925a1.5 1.5 0 0 1-1.446 0l-3.5-1.925A1.5 1.5 0 0 1 7 10.113V6.137a1.5 1.5 0 0 1 .777-1.314l3.5-1.925a1.5 1.5 0 0 1 1.446 0M4.5 21.5c0-3 3.25-5 7.5-5s7.5 2 7.5 5");
}

.chvxh_b9d {
  d: path("M7 5.25L12 8l5-2.75M12 8v5.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="blpc74b5x"/><path class="chvxh_b9d"/></g>`,
		"fallback": "uix:avatar-3d",
	});
}

export default Component;
