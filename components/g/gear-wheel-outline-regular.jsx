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

.gcurcebny {
  d: path("M6 12a6 6 0 1 0 12 0 6 6 0 1 0 -12 0");
}

.jie5y4wth {
  d: path("M16.5 16.5 19 19");
}

.l655-fz9o {
  d: path("M7.5 16.5 5 19");
}

.m0_78evzm {
  d: path("M7.5 7.5 5 5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sm55b-b9l {
  d: path("M16.5 7.5 19 5");
}
</style><g class="nrj6p8qat"><path class="gcurcebny"/><path class="bo51iypxr"/><path class="m0_78evzm"/><path class="sm55b-b9l"/><path class="jie5y4wth"/><path class="l655-fz9o"/></g>`,
		"fallback": "iconmind:gear-wheel-outline-regular",
	});
}

export default Component;
