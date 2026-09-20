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

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o8adkomvn {
  d: path("M12 8v12");
}

.t46_l1b3y {
  d: path("M7 4h10");
}
</style><g class="nrj6p8qat"><path class="t46_l1b3y"/><path class="o8adkomvn"/><path class="bi-wyob_j"/></g>`,
		"fallback": "iconmind:arrow-up-to-line-outline-regular",
	});
}

export default Component;
