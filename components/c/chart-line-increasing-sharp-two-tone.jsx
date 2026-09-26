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

.qwcxzabda {
  d: path("M19 7C17.9091 9.8125 13.9818 15.55 7 16");
}
</style><g class="gp_8x1bzb"><path class="p53xcyb3q"/><path class="qwcxzabda"/></g>`,
		"fallback": "keyline-icons:chart-line-increasing-sharp-two-tone",
	});
}

export default Component;
