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
		"content": `<style>.hzi6sbb6g {
  d: path("M7 5v16h10V5Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r182r524c {
  d: path("M7 9h10");
}

.z3yxp_dum {
  d: path("m12 9 3 3a3 3 0 0 1 -6 0Z");
}
</style><g class="nrj6p8qat"><path class="hzi6sbb6g"/><path class="z3yxp_dum"/><path class="r182r524c"/></g>`,
		"fallback": "iconmind:drinking-water-outline-regular",
	});
}

export default Component;
