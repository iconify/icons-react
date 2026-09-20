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
		"content": `<style>.aj1uncbqw {
  d: path("M4 7a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.nn7bp6b7i {
  fill: currentColor;
  d: path("M15 17a2 2 0 0 1 2 -2h3a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-3a2 2 0 0 1 -2 -2Z");
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

.p7r47ac_a {
  d: path("m13 13 2 -2");
}

.t6kisabuh {
  fill: currentColor;
  d: path("M4 7a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.voz_x46if {
  d: path("M15 17a2 2 0 0 1 2 -2h3a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-3a2 2 0 0 1 -2 -2Z");
}

.z106yi6pt {
  d: path("m9 9 7 7");
}
</style><g class="nrj6p8qat"><path class="t6kisabuh"/><path class="nn7bp6b7i"/><path class="aj1uncbqw"/><path class="z106yi6pt"/><path class="p7r47ac_a"/><path class="voz_x46if"/></g>`,
		"fallback": "iconmind:api-key-duotone-regular",
	});
}

export default Component;
