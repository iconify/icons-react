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
		"content": `<style>.vi1okejsh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 20L2 14L8 8M2 14L18 14C20.2091 14 22 12.2091 22 10L22 4");
}
</style><path class="vi1okejsh"/>`,
		"fallback": "keyline-icons:corner-down-left-fill",
	});
}

export default Component;
