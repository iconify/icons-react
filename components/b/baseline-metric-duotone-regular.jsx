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
		"content": `<style>.atq4odb0h {
  d: path("M11 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.ia5e4hb1l {
  fill: currentColor;
  d: path("M11 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.iulb4mb6k {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 20h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.lx_qbigic {
  d: path("M7 14h12");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.od1ow4b4r {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M7 14h12");
  opacity: var(--svg-opacity--0-2, 0.2);
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
</style><g class="nrj6p8qat"><path class="ia5e4hb1l"/><path class="pd-i35blz"/><path class="iulb4mb6k"/><path class="od1ow4b4r"/><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="lx_qbigic"/><path class="atq4odb0h"/></g>`,
		"fallback": "iconmind:baseline-metric-duotone-regular",
	});
}

export default Component;
