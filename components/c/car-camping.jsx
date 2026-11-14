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
		"content": `<style>.agmiuimar {
  d: path("M4.5 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-9.25-10l4-5.5l4 5.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i4ou-0b3o {
  d: path("M2.5 16.5V11l3-2.5H14l3.5 3H20q1.5 0 1.5 1.5v3.5Z");
}
</style><g class="hntgybcog"><path class="i4ou-0b3o"/><path class="agmiuimar"/></g>`,
		"fallback": "uix:car-camping",
	});
}

export default Component;
