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
		"content": `<style>.dmpyxbc1s {
  d: path("M7 7h12");
}

.fhsvwqbte {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M7 7h12");
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
</style><g class="nrj6p8qat"><path class="pd-i35blz"/><path class="iulb4mb6k"/><path class="fhsvwqbte"/><path class="lpek8pqxf"/><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="dmpyxbc1s"/><path class="mol-ojbtj"/></g>`,
		"fallback": "iconmind:capacity-plan-duotone-regular",
	});
}

export default Component;
