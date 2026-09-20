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
		"content": `<style>.bi-wyob_j {
  d: path("m8 12 4 -4 4 4");
}

.ctll97b3e {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 8v12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o-xue7oyy {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M7 4h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.o8adkomvn {
  d: path("M12 8v12");
}

.t46_l1b3y {
  d: path("M7 4h10");
}

.yr3tqvbwm {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m8 12 4 -4 4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="o-xue7oyy"/><path class="ctll97b3e"/><path class="yr3tqvbwm"/><path class="t46_l1b3y"/><path class="o8adkomvn"/><path class="bi-wyob_j"/></g>`,
		"fallback": "iconmind:arrow-up-to-line-duotone-thin",
	});
}

export default Component;
