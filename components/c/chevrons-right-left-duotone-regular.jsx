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
		"content": `<style>.e_z28zb4o {
  d: path("m20 7 -5 5 5 5");
}

.em7uy10sd {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m4 7 5 5 -5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.h_ozghejt {
  d: path("m4 7 5 5 -5 5");
}

.hz_gtxbjo {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m20 7 -5 5 5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="em7uy10sd"/><path class="hz_gtxbjo"/><path class="h_ozghejt"/><path class="e_z28zb4o"/></g>`,
		"fallback": "iconmind:chevrons-right-left-duotone-regular",
	});
}

export default Component;
