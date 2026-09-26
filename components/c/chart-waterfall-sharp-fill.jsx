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
		"content": `<style>.yo6c03b0x {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 2L3 21L22 21M7 18L7 10M11 12L11 4M15 4L15 10M19 18L19 8");
}
</style><path class="yo6c03b0x"/>`,
		"fallback": "keyline-icons:chart-waterfall-sharp-fill",
	});
}

export default Component;
