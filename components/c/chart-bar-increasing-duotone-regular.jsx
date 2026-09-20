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
		"content": `<style>.ab_a2hbzz {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 7h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.c0i67abdl {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 12h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.e03jjq99j {
  d: path("M4 7h6");
}

.gvkfsgbpl {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 17h14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.iulb4mb6k {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 20h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.nwor_i7ms {
  d: path("M4 17h14");
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.pd-i35blz {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.r3faxubne {
  d: path("M4 4v16");
}

.yw-dgs_nk {
  d: path("M4 12h10");
}
</style><g class="nrj6p8qat"><path class="pd-i35blz"/><path class="iulb4mb6k"/><path class="ab_a2hbzz"/><path class="c0i67abdl"/><path class="gvkfsgbpl"/><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="e03jjq99j"/><path class="yw-dgs_nk"/><path class="nwor_i7ms"/></g>`,
		"fallback": "iconmind:chart-bar-increasing-duotone-regular",
	});
}

export default Component;
