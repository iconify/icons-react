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
		"content": `<style>.fe-xkcbew {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 8.5L21 8.5M3 15.5L21 15.5M7.5 21L9.5 3M14.5 21L16.5 3");
}
</style><path class="fe-xkcbew"/>`,
		"fallback": "keyline-icons:hash-duotone",
	});
}

export default Component;
