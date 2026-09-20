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
		"content": `<style>.bo51iypxr {
  d: path("M10 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.e771rwjjh {
  d: path("M9 17A5 5 0 0 1 9 7");
}

.km3h1bbzc {
  d: path("M15 19h7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.se-pwqb_b {
  d: path("M2 5h7");
}

.xysie__pz {
  d: path("M15 7a5 5 0 0 1 0 10");
}
</style><g class="nrj6p8qat"><path class="bo51iypxr"/><path class="e771rwjjh"/><path class="xysie__pz"/><path class="se-pwqb_b"/><path class="km3h1bbzc"/></g>`,
		"fallback": "iconmind:cyclone-outline-regular",
	});
}

export default Component;
