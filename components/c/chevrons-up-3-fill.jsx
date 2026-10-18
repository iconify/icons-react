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
		"content": `<style>.jz2q32bva {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 21L12 16L17 21M7 14.5L12 9.5L17 14.5M7 8L12 3L17 8");
}
</style><path class="jz2q32bva"/>`,
		"fallback": "keyline-icons:chevrons-up-3-fill",
	});
}

export default Component;
