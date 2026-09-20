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
		"content": `<style>.all2vba1j {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M9 17h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hb5bs7bvv {
  d: path("M13 3 8 8h3.5l-5 5");
}

.hp-dvk76h {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M13 3 8 8h3.5l-5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kdybz_aht {
  d: path("M9 17h6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="hp-dvk76h"/><path class="all2vba1j"/><path class="hb5bs7bvv"/><path class="kdybz_aht"/></g>`,
		"fallback": "iconmind:brownout-duotone-regular",
	});
}

export default Component;
