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

.rvdo18t5w {
  d: path("M7 18L7 10M11 12L11 4M15 4L15 10M19 18L19 8");
}
</style><g class="gp_8x1bzb"><path class="p53xcyb3q"/><path class="rvdo18t5w"/></g>`,
		"fallback": "keyline-icons:chart-waterfall-sharp-duotone",
	});
}

export default Component;
