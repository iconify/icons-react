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
		"content": `<style>.akyxwngxd {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M9.5 12 12 9.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gedzti5ut {
  d: path("m12 14.5 2.5 -2.5");
}

.h5t6wxitw {
  d: path("M9.5 12 12 9.5");
}

.h7k_twb0c {
  d: path("M7.27 3.28a3 3 0 1 1 -2.54 0");
}

.isignkb_m {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M19.27 15.28a3 3 0 1 1 -2.54 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rpo59i0uj {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m12 14.5 2.5 -2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xb0ugqbkt {
  d: path("M19.27 15.28a3 3 0 1 1 -2.54 0");
}

.znp-i32pq {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M7.27 3.28a3 3 0 1 1 -2.54 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="znp-i32pq"/><path class="isignkb_m"/><path class="akyxwngxd"/><path class="rpo59i0uj"/><path class="h7k_twb0c"/><path class="xb0ugqbkt"/><path class="h5t6wxitw"/><path class="gedzti5ut"/></g>`,
		"fallback": "iconmind:agent-protocol-duotone-regular",
	});
}

export default Component;
