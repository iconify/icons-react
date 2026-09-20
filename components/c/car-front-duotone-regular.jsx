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
		"content": `<style>.d4y-4fbjb {
  fill: currentColor;
  d: path("M5 16a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
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

.omxq2cb9k {
  fill: currentColor;
  d: path("M2 19v-6l6 -6h8l6 6v6Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.p4jzd4blg {
  d: path("M17 16a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.uk4kcubrj {
  fill: currentColor;
  d: path("M17 16a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.zugrvnb7t {
  d: path("M2 13h20");
}
</style><g class="nrj6p8qat"><path class="omxq2cb9k"/><path class="d4y-4fbjb"/><path class="uk4kcubrj"/><path class="o4b5bv6se"/><path class="zugrvnb7t"/><path class="o2uaggb1q"/><path class="p4jzd4blg"/></g>`,
		"fallback": "iconmind:car-front-duotone-regular",
	});
}

export default Component;
