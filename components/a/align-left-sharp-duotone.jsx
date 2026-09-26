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
		"content": `<style>.c8ot_ib-j {
  stroke-opacity: 0.4;
  d: path("M2 3L22 3M2 15L22 15");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.w8-6eom3j {
  d: path("M2 9L16 9M2 21L16 21");
}
</style><g class="gp_8x1bzb"><path class="c8ot_ib-j"/><path class="w8-6eom3j"/></g>`,
		"fallback": "keyline-icons:align-left-sharp-duotone",
	});
}

export default Component;
