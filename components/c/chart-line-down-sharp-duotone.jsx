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

.p53xcyb3q {
  stroke-opacity: 0.4;
  d: path("M3 2L3 21L22 21");
}

.slmpr7-2l {
  d: path("M6.7017 7.6644L11 12.5L15 9.5L20.2628 14.3243M15.5 15L21 15L21 9.5");
}
</style><g class="gp_8x1bzb"><path class="p53xcyb3q"/><path class="slmpr7-2l"/></g>`,
		"fallback": "keyline-icons:chart-line-down-sharp-duotone",
	});
}

export default Component;
