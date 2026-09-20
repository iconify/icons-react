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
		"content": `<style>.hb5bs7bvv {
  d: path("M13 3 8 8h3.5l-5 5");
}

.hsmhdqayv {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M9 17h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jhciu1yca {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M13 3 8 8h3.5l-5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kdybz_aht {
  d: path("M9 17h6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="jhciu1yca"/><path class="hsmhdqayv"/><path class="hb5bs7bvv"/><path class="kdybz_aht"/></g>`,
		"fallback": "iconmind:brownout-duotone-bold",
	});
}

export default Component;
