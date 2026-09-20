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
		"content": `<style>.g-a4wz-fw {
  d: path("M8 14a3 3 0 0 1 6 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.x_kkpk0ip {
  d: path("m16 14 5 -5");
}

.youb8ccbq {
  d: path("M6 14h10");
}

.z9rf4z-yw {
  d: path("M16 14a5 5 0 0 1 -10 0");
}
</style><g class="nrj6p8qat"><path class="youb8ccbq"/><path class="z9rf4z-yw"/><path class="g-a4wz-fw"/><path class="x_kkpk0ip"/></g>`,
		"fallback": "iconmind:ingredient-outline-regular",
	});
}

export default Component;
