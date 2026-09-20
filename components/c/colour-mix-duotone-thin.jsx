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
		"content": `<style>.bxyh6cbnl {
  d: path("M9 12a6 6 0 1 0 12 0 6 6 0 1 0 -12 0");
}

.gbt-66b2v {
  fill: currentColor;
  d: path("M9 12a6 6 0 1 0 12 0 6 6 0 1 0 -12 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.gcy6xobcc {
  d: path("M3 12a6 6 0 1 0 12 0 6 6 0 1 0 -12 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nu-uxtbks {
  fill: currentColor;
  d: path("M3 12a6 6 0 1 0 12 0 6 6 0 1 0 -12 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="nu-uxtbks"/><path class="gbt-66b2v"/><path class="gcy6xobcc"/><path class="bxyh6cbnl"/></g>`,
		"fallback": "iconmind:colour-mix-duotone-thin",
	});
}

export default Component;
