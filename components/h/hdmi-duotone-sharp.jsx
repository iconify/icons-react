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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.ki9wu551c {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 7h18v4l-4 6H7l-4-6zm5 4h8");
}

.mnrnmv-mr {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M21 7v4l-4 6H7l-4-6V7Z");
}
</style><g class="ft5dv1b6b"><path class="mnrnmv-mr"/><path class="ki9wu551c"/></g>`,
		"fallback": "coolicons:hdmi-duotone-sharp",
	});
}

export default Component;
