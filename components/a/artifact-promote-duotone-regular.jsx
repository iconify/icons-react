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
		"content": `<style>.ae0h5kb0o {
  d: path("M9 15h6");
}

.ldkdjnwcl {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M9 15h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.n5v54kp1e {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 3v18M4 6h16M4 18h16m0 -15v18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o97x25buv {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M9.5 11.5 12 9l2.5 2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ri2m-q_tv {
  d: path("M4 3v18M4 6h16M4 18h16m0 -15v18");
}

.y5493mbgk {
  d: path("M9.5 11.5 12 9l2.5 2.5");
}
</style><g class="nrj6p8qat"><path class="n5v54kp1e"/><path class="o97x25buv"/><path class="ldkdjnwcl"/><path class="ri2m-q_tv"/><path class="y5493mbgk"/><path class="ae0h5kb0o"/></g>`,
		"fallback": "iconmind:artifact-promote-duotone-regular",
	});
}

export default Component;
