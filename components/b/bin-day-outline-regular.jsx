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
		"content": `<style>.ej_n65bgd {
  d: path("M6 8v11h10V8Z");
}

.n0k4ov7kr {
  d: path("M7 21a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pwvj2zbau {
  d: path("M5 8V5h12v3");
}

.rso9r0bef {
  d: path("M13 21a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="nrj6p8qat"><path class="ej_n65bgd"/><path class="pwvj2zbau"/><path class="n0k4ov7kr"/><path class="rso9r0bef"/></g>`,
		"fallback": "iconmind:bin-day-outline-regular",
	});
}

export default Component;
