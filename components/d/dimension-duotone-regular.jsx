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
		"content": `<style>.es1y8202y {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M13.5 7H17v3.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.iulb4mb6k {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 20h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.lpek8pqxf {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m7 17 8 -8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mol-ojbtj {
  d: path("m7 17 8 -8");
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

.pd-i35blz {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.r3faxubne {
  d: path("M4 4v16");
}

.y9a3risze {
  d: path("M13.5 7H17v3.5");
}
</style><g class="nrj6p8qat"><path class="pd-i35blz"/><path class="iulb4mb6k"/><path class="lpek8pqxf"/><path class="es1y8202y"/><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="mol-ojbtj"/><path class="y9a3risze"/></g>`,
		"fallback": "iconmind:dimension-duotone-regular",
	});
}

export default Component;
