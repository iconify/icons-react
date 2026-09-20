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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mqi2_ac9e {
  d: path("M9.5 15.5 12 18l2.5 -2.5");
}

.ohhz_s35v {
  d: path("M12 12v6");
}

.q8pkiebhf {
  fill: currentColor;
  d: path("M9.5 4h5v2.5L18 10a7 7 0 1 1 -12 0l3.5 -3.5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.y7d97_qtf {
  d: path("M9.5 4h5v2.5L18 10a7 7 0 1 1 -12 0l3.5 -3.5Z");
}
</style><g class="hntgybcog"><path class="q8pkiebhf"/><path class="y7d97_qtf"/><path class="ohhz_s35v"/><path class="mqi2_ac9e"/></g>`,
		"fallback": "iconmind:capital-loss-duotone-thin",
	});
}

export default Component;
