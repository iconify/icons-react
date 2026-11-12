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
		"content": `<style>.fsd93ib2q {
  d: path("M18 21L12 15L6 21");
}

.fybv11bra {
  d: path("M18 3L12 9L6 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="fybv11bra"/><path class="fsd93ib2q"/></g>`,
		"fallback": "solar:chevrons-down-up-linear",
	});
}

export default Component;
