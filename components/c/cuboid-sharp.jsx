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
		"content": `<style>.bag1n_9lm {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 8L8 3L21 3L21 16L16 21L3 21ZM3 8L16 8L16 21M16 8L21 3");
}
</style><path class="bag1n_9lm"/>`,
		"fallback": "keyline-icons:cuboid-sharp",
	});
}

export default Component;
