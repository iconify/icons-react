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
		"content": `<style>.kgxuokb8y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 3L12 8L17 3M7 9.5L12 14.5L17 9.5M7 16L12 21L17 16");
}
</style><path class="kgxuokb8y"/>`,
		"fallback": "keyline-icons:chevrons-down-3-duotone",
	});
}

export default Component;
