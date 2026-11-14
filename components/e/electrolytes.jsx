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
		"content": `<style>.dri6u_brp {
  d: path("M12 2.5s-7 7.5-7 12a7 7 0 0 0 14 0c0-4.5-7-12-7-12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hx65q2bpd {
  d: path("m12.75 8l-3 5h4.5L11 18.5");
}
</style><g class="hntgybcog"><path class="dri6u_brp"/><path class="hx65q2bpd"/></g>`,
		"fallback": "uix:electrolytes",
	});
}

export default Component;
