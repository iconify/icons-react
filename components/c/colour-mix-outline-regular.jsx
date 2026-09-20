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
		"content": `<style>.bxyh6cbnl {
  d: path("M9 12a6 6 0 1 0 12 0 6 6 0 1 0 -12 0");
}

.gcy6xobcc {
  d: path("M3 12a6 6 0 1 0 12 0 6 6 0 1 0 -12 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="gcy6xobcc"/><path class="bxyh6cbnl"/></g>`,
		"fallback": "iconmind:colour-mix-outline-regular",
	});
}

export default Component;
