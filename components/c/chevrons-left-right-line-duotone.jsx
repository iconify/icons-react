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
		"content": `<style>.ax2a_u0ki {
  d: path("M18 9L21 12L15 18");
}

.di4tvaczb {
  d: path("M9 18L3 12L9 6");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.gw6llof_t {
  d: path("M15 18L21 12L15 6");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jdgij1_su {
  d: path("M6 9L3 12L9 18");
}
</style><g class="hntgybcog"><path class="gw6llof_t"/><path class="ax2a_u0ki"/><path class="di4tvaczb"/><path class="jdgij1_su"/></g>`,
		"fallback": "solar:chevrons-left-right-line-duotone",
	});
}

export default Component;
