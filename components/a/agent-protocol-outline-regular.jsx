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
		"content": `<style>.gedzti5ut {
  d: path("m12 14.5 2.5 -2.5");
}

.h5t6wxitw {
  d: path("M9.5 12 12 9.5");
}

.h7k_twb0c {
  d: path("M7.27 3.28a3 3 0 1 1 -2.54 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xb0ugqbkt {
  d: path("M19.27 15.28a3 3 0 1 1 -2.54 0");
}
</style><g class="nrj6p8qat"><path class="h7k_twb0c"/><path class="xb0ugqbkt"/><path class="h5t6wxitw"/><path class="gedzti5ut"/></g>`,
		"fallback": "iconmind:agent-protocol-outline-regular",
	});
}

export default Component;
