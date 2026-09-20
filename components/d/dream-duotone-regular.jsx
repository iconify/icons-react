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
		"content": `<style>.b0-9-ac4u {
  fill: currentColor;
  d: path("M7 16a4 4 0 0 1 1 -8 5 5 0 0 1 9 1 4 4 0 0 1 0 7Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.f-g8rrj2k {
  d: path("M2 21a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.iervj3bls {
  d: path("M7 16a4 4 0 0 1 1 -8 5 5 0 0 1 9 1 4 4 0 0 1 0 7Z");
}

.ke67hpbif {
  fill: currentColor;
  d: path("M2 21a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.koh8ckbdb {
  d: path("M5 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.mdbq_bc-v {
  fill: currentColor;
  d: path("M5 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="b0-9-ac4u"/><path class="mdbq_bc-v"/><path class="ke67hpbif"/><path class="iervj3bls"/><path class="koh8ckbdb"/><path class="f-g8rrj2k"/></g>`,
		"fallback": "iconmind:dream-duotone-regular",
	});
}

export default Component;
