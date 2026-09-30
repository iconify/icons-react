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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pqdsnpb8o {
  stroke-opacity: 0.4;
  d: path("M18 2L18 21M21.2929 17.7071L18 21L14.7071 17.7071");
}

.pwnnr1bts {
  d: path("M6 22L6 3M9.2929 6.2929L6 3L2.7071 6.2929");
}
</style><g class="gp_8x1bzb"><path class="pqdsnpb8o"/><path class="pwnnr1bts"/></g>`,
		"fallback": "keyline-icons:arrow-up-down-sharp-duotone",
	});
}

export default Component;
