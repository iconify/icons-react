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
		"content": `<style>.n5nc7lbju {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 4L20 4L20 20L4 20L4 4ZM8 8L16 8L16 16L8 16L8 8ZM9 4L9 1M9 20L9 23M4 9L1 9M20 9L23 9M15 4L15 1M15 20L15 23M4 15L1 15M20 15L23 15");
}
</style><path class="n5nc7lbju"/>`,
		"fallback": "keyline-icons:cpu-sharp",
	});
}

export default Component;
