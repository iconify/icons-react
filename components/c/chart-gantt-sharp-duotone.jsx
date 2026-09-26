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
		"content": `<style>.c3_mfwxuw {
  d: path("M6 7L14 7M9 12L17 12M12 17L20 17");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p53xcyb3q {
  stroke-opacity: 0.4;
  d: path("M3 2L3 21L22 21");
}
</style><g class="gp_8x1bzb"><path class="p53xcyb3q"/><path class="c3_mfwxuw"/></g>`,
		"fallback": "keyline-icons:chart-gantt-sharp-duotone",
	});
}

export default Component;
