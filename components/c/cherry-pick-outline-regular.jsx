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
		"content": `<style>.e030h51ix {
  d: path("M10 17a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pn-mm5bcv {
  d: path("M17 17a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.tla8vyn6c {
  d: path("M12 7v8");
}

.ymw3aibdo {
  d: path("M10 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.z43nfgbva {
  d: path("M3 17a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="nrj6p8qat"><path class="z43nfgbva"/><path class="e030h51ix"/><path class="pn-mm5bcv"/><path class="ymw3aibdo"/><path class="tla8vyn6c"/></g>`,
		"fallback": "iconmind:cherry-pick-outline-regular",
	});
}

export default Component;
