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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o2uaggb1q {
  d: path("M5 16a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.o4b5bv6se {
  d: path("M2 19v-6l6 -6h8l6 6v6Z");
}

.p4jzd4blg {
  d: path("M17 16a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.zugrvnb7t {
  d: path("M2 13h20");
}
</style><g class="nrj6p8qat"><path class="o4b5bv6se"/><path class="zugrvnb7t"/><path class="o2uaggb1q"/><path class="p4jzd4blg"/></g>`,
		"fallback": "iconmind:car-front-outline-regular",
	});
}

export default Component;
