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
		"content": `<style>.kmd_30j9x {
  d: path("M2 17a3 3 0 0 1 3 -3h3a3 3 0 0 1 3 3 3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.u0acwebrq {
  d: path("M13 17a3 3 0 0 1 3 -3h3a3 3 0 0 1 3 3 3 3 0 0 1 -3 3h-3a3 3 0 0 1 -3 -3");
}

.z81xltbwu {
  d: path("M2 7a3 3 0 0 1 3 -3h14a3 3 0 0 1 3 3 3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3");
}
</style><g class="nrj6p8qat"><path class="z81xltbwu"/><path class="kmd_30j9x"/><path class="u0acwebrq"/></g>`,
		"fallback": "iconmind:chunking-outline-regular",
	});
}

export default Component;
