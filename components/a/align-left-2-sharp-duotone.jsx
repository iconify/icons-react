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
		"content": `<style>.f-qcku-wb {
  stroke-opacity: 0.4;
  d: path("M7 4.5L22 4.5M7 9.5L22 9.5M7 14.5L19 14.5M7 19.5L15 19.5");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.y9s618baa {
  d: path("M3 2L3 22");
}
</style><g class="gp_8x1bzb"><path class="f-qcku-wb"/><path class="y9s618baa"/></g>`,
		"fallback": "keyline-icons:align-left-2-sharp-duotone",
	});
}

export default Component;
