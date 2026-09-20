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
		"content": `<style>.buon2iihn {
  d: path("M16 12v4");
}

.cib2dlbwm {
  d: path("M4 15v-5l4 -4 4 4v5Z");
}

.gd58hqb6m {
  fill: currentColor;
  d: path("M4 15v-5l4 -4 4 4v5Z");
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

.q8xy9tkjr {
  d: path("M20 12v4");
}

.zrdou8b0n {
  d: path("M12 12h9");
}
</style><g class="nrj6p8qat"><path class="gd58hqb6m"/><path class="cib2dlbwm"/><path class="zrdou8b0n"/><path class="buon2iihn"/><path class="q8xy9tkjr"/></g>`,
		"fallback": "iconmind:house-key-duotone-regular",
	});
}

export default Component;
