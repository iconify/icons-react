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
		"content": `<style>.rue9oxbut {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 3V21M19 3V21M3 21H21M5 8H19M5 15H19M9 6.5V9.5M13 6.5V9.5M11 13.5V16.5M15 13.5V16.5");
}
</style><path class="rue9oxbut"/>`,
		"fallback": "keyline-icons:abacus-fill",
	});
}

export default Component;
