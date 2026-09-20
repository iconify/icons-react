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
		"content": `<style>.ba25vibdz {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M9.5 14.5 12 17l2.5 -2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.e2evtpg8i {
  d: path("M9.5 9.5 12 7l2.5 2.5");
}

.iulb4mb6k {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 20h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.m53fnk4nh {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M9.5 9.5 12 7l2.5 2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
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

.s1pdfd1ij {
  d: path("M9.5 14.5 12 17l2.5 -2.5");
}
</style><g class="nrj6p8qat"><path class="pd-i35blz"/><path class="iulb4mb6k"/><path class="m53fnk4nh"/><path class="ba25vibdz"/><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="e2evtpg8i"/><path class="s1pdfd1ij"/></g>`,
		"fallback": "iconmind:gauge-metric-duotone-regular",
	});
}

export default Component;
