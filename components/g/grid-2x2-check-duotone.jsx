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

.u1m3wobsk {
  d: path("M16 19.6L18.3333 22L22 16");
}

.vvsigaftl {
  stroke-opacity: 0.4;
  d: path("M2 11L18 11C19.1046 11 20 10.1046 20 9L20 5C20 3.3431 18.6569 2 17 2L5 2C3.3431 2 2 3.3431 2 5L2 17C2 18.6569 3.3431 20 5 20L9 20C10.1046 20 11 19.1046 11 18L11 2");
}
</style><g class="nrj6p8qat"><path class="vvsigaftl"/><path class="u1m3wobsk"/></g>`,
		"fallback": "keyline-icons:grid-2x2-check-duotone",
	});
}

export default Component;
