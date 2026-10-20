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
		"content": `<style>.iwar0obkc {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5 1L17 1C19.2091 1 21 2.7909 21 5L21 9C21 10.6569 19.6569 12 18 12L12 12L12 18C12 19.6569 10.6569 21 9 21L5 21C2.7909 21 1 19.2091 1 17L1 5C1 2.7909 2.7909 1 5 1ZM5 3C3.8954 3 3 3.8954 3 5L3 10L10 10L10 3Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.u1m3wobsk {
  d: path("M16 19.6L18.3333 22L22 16");
}
</style><g class="nrj6p8qat"><path clip-rule="evenodd" class="iwar0obkc"/><path class="u1m3wobsk"/></g>`,
		"fallback": "keyline-icons:grid-2x2-check-fill",
	});
}

export default Component;
