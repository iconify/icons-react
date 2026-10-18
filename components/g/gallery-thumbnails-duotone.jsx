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
		"content": `<style>.e1472_dor {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 5C2 3.3431 3.3431 2 5 2L19 2C20.6569 2 22 3.3431 22 5L22 15C22 16.6569 20.6569 18 19 18L5 18C3.3431 18 2 16.6569 2 15L2 5Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oi84idb2v {
  d: path("M3 21L6 21M10.5 21L13.5 21M18 21L21 21");
}
</style><g class="nrj6p8qat"><path class="e1472_dor"/><path class="oi84idb2v"/></g>`,
		"fallback": "keyline-icons:gallery-thumbnails-duotone",
	});
}

export default Component;
