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
		"content": `<style>.bcnd39q6l {
  d: path("m16 15 3 -3");
}

.h6_thjblr {
  d: path("M9 8V2");
}

.jha0j9k6g {
  d: path("m16 15 3 3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.w7-1r_bmu {
  d: path("M9 19c-3 0 -5 -2 -5 -4s2 -4 5 -4c4 0 6 2 7 4 -1 2 -3 4 -7 4");
}
</style><g class="nrj6p8qat"><path class="w7-1r_bmu"/><path class="bcnd39q6l"/><path class="jha0j9k6g"/><path class="h6_thjblr"/></g>`,
		"fallback": "iconmind:fishing-outline-regular",
	});
}

export default Component;
