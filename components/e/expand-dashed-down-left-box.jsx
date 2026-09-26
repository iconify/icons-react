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
		"content": `<style>.gx_x1jbqf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18 11L18 21M15 18L18 21L21 18M13 6L3 6M6 3L3 6L6 9M8 21L6 21M3 18L3 16M6 13L8 13M11 18L11 16");
}
</style><path class="gx_x1jbqf"/>`,
		"fallback": "keyline-icons:expand-dashed-down-left-box",
	});
}

export default Component;
