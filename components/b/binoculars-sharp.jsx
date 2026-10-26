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
		"content": `<style>.bp26y6bqn {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 8L2 18L2 20L7 20C7 18.3431 8.3431 17 10 17L10 8ZM5 8L5 4L9 4L9 8M20 8L22 18L22 20L17 20C17 18.3431 15.6569 17 14 17L14 8ZM19 8L19 4L15 4L15 8M10 10L14 10M14 14L10 14");
}
</style><path class="bp26y6bqn"/>`,
		"fallback": "keyline-icons:binoculars-sharp",
	});
}

export default Component;
