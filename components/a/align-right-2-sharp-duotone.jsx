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
		"content": `<style>.ez9x9wbch {
  d: path("M21 2L21 22");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vzmq3-b_e {
  stroke-opacity: 0.4;
  d: path("M17 4.5L2 4.5M17 9.5L2 9.5M17 14.5L5 14.5M17 19.5L9 19.5");
}
</style><g class="gp_8x1bzb"><path class="vzmq3-b_e"/><path class="ez9x9wbch"/></g>`,
		"fallback": "keyline-icons:align-right-2-sharp-duotone",
	});
}

export default Component;
