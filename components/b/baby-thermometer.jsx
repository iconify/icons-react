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
		"content": `<style>.fxwnb7vgp {
  cx: 5px;
  cy: 19px;
  r: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hspgb-b5j {
  d: path("m12 12l2.5-2.5");
}

.r7947ab6x {
  d: path("m8.23 12.23l7.5-7.5a2.5 2.5 0 0 1 3.54 3.54l-7.5 7.5a2.5 2.5 0 0 1-3.54-3.54m0 3.54l-1.82 1.82");
}
</style><g class="hntgybcog"><path class="r7947ab6x"/><circle class="fxwnb7vgp"/><path class="hspgb-b5j"/></g>`,
		"fallback": "iconoven:baby-thermometer",
	});
}

export default Component;
