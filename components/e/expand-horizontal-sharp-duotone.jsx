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
		"content": `<style>.a_e12ubsx {
  stroke-opacity: 0.4;
  d: path("M2 4L2 20M22 4L22 20");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.k-rabwdvx {
  d: path("M6 12L18 12M9.2929 8.7071L6 12L9.2929 15.2929M14.7071 8.7071L18 12L14.7071 15.2929");
}
</style><g class="gp_8x1bzb"><path class="a_e12ubsx"/><path class="k-rabwdvx"/></g>`,
		"fallback": "keyline-icons:expand-horizontal-sharp-duotone",
	});
}

export default Component;
