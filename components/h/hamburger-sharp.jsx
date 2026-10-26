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
		"content": `<style>.budiujh_s {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 12L4 11C4 6.5817 7.5817 3 12 3C16.4183 3 20 6.5817 20 11L20 12M2 12L22 12L22 16L2 16ZM4 16L4 21L20 21L20 16");
}
</style><path class="budiujh_s"/>`,
		"fallback": "keyline-icons:hamburger-sharp",
	});
}

export default Component;
