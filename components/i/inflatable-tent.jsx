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

.kco5jebxt {
  d: path("m10 17l2-4.5l2 4.5");
}

.m0a0l-c-p {
  d: path("M6 17c0-6 2.5-10 6-10s6 4 6 10Z");
}

.yz3rs2fes {
  d: path("M2.5 20c0-10 4-16.5 9.5-16.5S21.5 10 21.5 20Z");
}
</style><g class="hntgybcog"><path class="yz3rs2fes"/><path class="m0a0l-c-p"/><path class="kco5jebxt"/></g>`,
		"fallback": "uix:inflatable-tent",
	});
}

export default Component;
