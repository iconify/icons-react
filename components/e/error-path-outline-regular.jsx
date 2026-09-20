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
		"content": `<style>.akm88w1ho {
  d: path("M2 8h7l4 4h9");
}

.c05571vet {
  d: path("m16 15 4 4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.puhwuz9ig {
  d: path("m20 15 -4 4");
}

.v_3erbqcl {
  d: path("m9 8 4 -4h9");
}
</style><g class="nrj6p8qat"><path class="akm88w1ho"/><path class="v_3erbqcl"/><path class="c05571vet"/><path class="puhwuz9ig"/></g>`,
		"fallback": "iconmind:error-path-outline-regular",
	});
}

export default Component;
