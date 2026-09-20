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
		"content": `<style>.bhkpzybsm {
  d: path("M2 8a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.dgzuelb_e {
  d: path("M2 11h12");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sebrrz16i {
  d: path("M14 15a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.z9ywnzvgb {
  d: path("M18 12v3h3");
}
</style><g class="nrj6p8qat"><path class="bhkpzybsm"/><path class="dgzuelb_e"/><path class="sebrrz16i"/><path class="z9ywnzvgb"/></g>`,
		"fallback": "iconmind:blood-pressure-outline-regular",
	});
}

export default Component;
