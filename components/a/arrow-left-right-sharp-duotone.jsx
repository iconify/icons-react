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
		"content": `<style>.b992twb7r {
  d: path("M2 18L21 18M17.7071 14.7071L21 18L17.7071 21.2929");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.lj1cq3bag {
  stroke-opacity: 0.4;
  d: path("M22 6L3 6M6.2929 2.7071L3 6L6.2929 9.2929");
}
</style><g class="gp_8x1bzb"><path class="lj1cq3bag"/><path class="b992twb7r"/></g>`,
		"fallback": "keyline-icons:arrow-left-right-sharp-duotone",
	});
}

export default Component;
