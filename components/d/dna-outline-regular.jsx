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
		"content": `<style>.eq8-mlt7s {
  d: path("M16 3c-8 4 -8 14 0 18");
}

.l0v-b4kbr {
  d: path("M8 12h8");
}

.l9y5p1bzr {
  d: path("M8 3c8 4 8 14 0 18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="l9y5p1bzr"/><path class="eq8-mlt7s"/><path class="l0v-b4kbr"/></g>`,
		"fallback": "iconmind:dna-outline-regular",
	});
}

export default Component;
