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

.l4jcusbav {
  d: path("M6.7486 17.6286L9 12L19 11L21.0513 4.846");
}

.p53xcyb3q {
  stroke-opacity: 0.4;
  d: path("M3 2L3 21L22 21");
}
</style><g class="gp_8x1bzb"><path class="p53xcyb3q"/><path class="l4jcusbav"/></g>`,
		"fallback": "keyline-icons:chart-line-sharp-two-tone",
	});
}

export default Component;
