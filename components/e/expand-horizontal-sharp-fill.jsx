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
		"content": `<style>.e-aep1bov {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 4L2 20M22 4L22 20M6 12L18 12M9.2929 8.7071L6 12L9.2929 15.2929M14.7071 8.7071L18 12L14.7071 15.2929");
}
</style><path class="e-aep1bov"/>`,
		"fallback": "keyline-icons:expand-horizontal-sharp-fill",
	});
}

export default Component;
