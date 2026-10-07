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
		"content": `<style>.uldnjmbht {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 6L2 6L2 18L6.5 18M13.5 6L18 6L18 18L13 18M22 8.5L22 15.5M11.3 7.6L8 12L12 12L8.7 16.4");
}
</style><path class="uldnjmbht"/>`,
		"fallback": "keyline-icons:battery-charging-sharp-fill",
	});
}

export default Component;
