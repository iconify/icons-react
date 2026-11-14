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
		"content": `<style>.fu40s_ydd {
  d: path("M12 15c-2.5 0-4-1.5-4-4c2.5 0 4 1.5 4 4m0 0c2.5 0 4-1.5 4-4c-2.5 0-4 1.5-4 4");
}

.gksyehfcl {
  d: path("M5 21v-9c0-4.5 3-7 7-7s7 2.5 7 7v9M3 21h18M12 5V3m0 18v-6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="gksyehfcl"/><path class="fu40s_ydd"/></g>`,
		"fallback": "uix:garden-cloche",
	});
}

export default Component;
