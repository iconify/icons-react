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
		"content": `<style>.dfv2_gb8a {
  d: path("M6 12v6");
}

.h71uhob3i {
  d: path("M2 8a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.hout63b1h {
  d: path("M13 18a4 4 0 0 1 8 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o8od38cnm {
  d: path("M4 18h16");
}
</style><g class="nrj6p8qat"><path class="o8od38cnm"/><path class="h71uhob3i"/><path class="dfv2_gb8a"/><path class="hout63b1h"/></g>`,
		"fallback": "iconmind:garden-outline-regular",
	});
}

export default Component;
