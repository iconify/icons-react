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
		"content": `<style>.l-z7x0gba {
  d: path("m8 17l2-6H7L6 9l4-3l-1-3l3 1c3 1 4 4 4 7v6");
}

.mhz__qb-e {
  stroke-opacity: 0.4;
  d: path("M6 19a2 2 0 0 1 2-2h8a2 2 0 1 1 0 4H8a2 2 0 0 1-2-2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="mhz__qb-e"/><path class="l-z7x0gba"/></g>`,
		"fallback": "coolicons:chess-duocolor",
	});
}

export default Component;
