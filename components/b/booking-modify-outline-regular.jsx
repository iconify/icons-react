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
		"content": `<style>.cu26jmb_i {
  d: path("M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.j6apg33fy {
  d: path("M16 2.5V5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qaa4bo00g {
  d: path("M8 2.5V5");
}

.vkd3wfbds {
  d: path("m8 18 7 -7");
}

.x50q_4bdr {
  d: path("M3 10h18");
}
</style><g class="nrj6p8qat"><path class="cu26jmb_i"/><path class="x50q_4bdr"/><path class="qaa4bo00g"/><path class="j6apg33fy"/><path class="vkd3wfbds"/></g>`,
		"fallback": "iconmind:booking-modify-outline-regular",
	});
}

export default Component;
