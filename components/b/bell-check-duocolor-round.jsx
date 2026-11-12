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
		"content": `<style>.n3emery0c {
  stroke-opacity: 0.4;
  d: path("m9 11l2 2l4-4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tethvackr {
  d: path("M12 17H6a2 2 0 0 1-2-2c0-1 1-1 1-2v-3a7 7 0 0 1 14 0v3c0 1 1 1 1 2a2 2 0 0 1-2 2zm-3 0v1a3 3 0 0 0 6 0v-1");
}
</style><g class="nrj6p8qat"><path class="n3emery0c"/><path class="tethvackr"/></g>`,
		"fallback": "coolicons:bell-check-duocolor-round",
	});
}

export default Component;
