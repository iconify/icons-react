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
		"content": `<style>.yfzxu-jmh {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 4L22 4L22 20L2 20ZM9 4L9 20M15 4L15 20M2 9L9 9M2 15L9 15M15 9L22 9M15 15L22 15");
}
</style><path class="yfzxu-jmh"/>`,
		"fallback": "keyline-icons:card-chip-sharp",
	});
}

export default Component;
