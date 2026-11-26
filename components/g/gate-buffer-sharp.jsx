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
		"content": `<style>.gug2ojjxl {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 6L18 12L7 18ZM1 12L7 12M18 12L23 12");
}
</style><path class="gug2ojjxl"/>`,
		"fallback": "keyline-icons:gate-buffer-sharp",
	});
}

export default Component;
