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
		"content": `<style>.d787out6m {
  d: path("M9 6L12 3L18 9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j6fms_bnd {
  d: path("M18 9L12 3L6 9");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.norr5njek {
  d: path("M9 18L12 21L18 15");
}

.rmhwmnbwp {
  d: path("M18 15L12 21L6 15");
  opacity: var(--svg-opacity--0-5, 0.5);
}
</style><g class="hntgybcog"><path class="j6fms_bnd"/><path class="d787out6m"/><path class="rmhwmnbwp"/><path class="norr5njek"/></g>`,
		"fallback": "solar:chevrons-up-down-line-duotone",
	});
}

export default Component;
