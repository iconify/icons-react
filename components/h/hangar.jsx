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
		"content": `<style>.ab-94pb1j {
  d: path("M6.5 20.5v-8h11v8");
}

.g9msq0hph {
  d: path("M2.5 20.5V11a9.5 8 0 0 1 19 0v9.5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="g9msq0hph"/><path class="ab-94pb1j"/></g>`,
		"fallback": "uix:hangar",
	});
}

export default Component;
