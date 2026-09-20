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
		"content": `<style>.asz-ftbxh {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m3 6 4 -4 4 4 4 -4 4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.iulb4mb6k {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 20h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mqnae981n {
  d: path("m9 11 3 3 3 -3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.z35tx4bdc {
  d: path("m3 6 4 -4 4 4 4 -4 4 4");
}

.zo_l4ub5r {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m9 11 3 3 3 -3");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="asz-ftbxh"/><path class="zo_l4ub5r"/><path class="iulb4mb6k"/><path class="z35tx4bdc"/><path class="mqnae981n"/><path class="oifr9zbpt"/></g>`,
		"fallback": "iconmind:denoise-duotone-regular",
	});
}

export default Component;
