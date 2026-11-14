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

.o5s2nu0kc {
  d: path("M12.5 5.75a7 7 0 1 0 0 12.5M15.75 3c3.75 1.5 5.75 5 5.75 9s-2 7.5-5.75 9c-1.25-4-1.25-14 0-18M7.5 10.5h.01");
}

.z_gaqcbca {
  d: path("M6 14.5q2 1.5 4 0");
}
</style><g class="hntgybcog"><path class="o5s2nu0kc"/><path class="z_gaqcbca"/></g>`,
		"fallback": "uix:impostor-syndrome",
	});
}

export default Component;
