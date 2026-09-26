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
		"content": `<style>.xhiqf8q1b {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 2L3 21L22 21M6.7017 7.6644L11 12.5L15 9.5L20.2628 14.3243M15.5 15L21 15L21 9.5");
}
</style><path class="xhiqf8q1b"/>`,
		"fallback": "keyline-icons:chart-line-down-sharp",
	});
}

export default Component;
