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
		"content": `<style>.cxl3qntht {
  d: path("M12 11.5q2.5 3 2.5 4.5a2.5 2.5 0 0 1-5 0q0-1.5 2.5-4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z32-znt-c {
  d: path("M9.5 2.5h5V6L18 9v10.5a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9l3.5-3Z");
}
</style><g class="hntgybcog"><path class="z32-znt-c"/><path class="cxl3qntht"/></g>`,
		"fallback": "uix:dishwasher-rinse-aid",
	});
}

export default Component;
