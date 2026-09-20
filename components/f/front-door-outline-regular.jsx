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
		"content": `<style>.elmoo_bpw {
  d: path("M15 13a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q518x4bkb {
  d: path("M5 9h14");
}

.yvgc3wkxj {
  d: path("M5 21V5h14v16Z");
}
</style><g class="nrj6p8qat"><path class="yvgc3wkxj"/><path class="elmoo_bpw"/><path class="q518x4bkb"/></g>`,
		"fallback": "iconmind:front-door-outline-regular",
	});
}

export default Component;
