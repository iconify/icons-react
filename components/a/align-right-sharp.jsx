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
		"content": `<style>.c55_stbkz {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 3L22 3M8 9L22 9M2 15L22 15M8 21L22 21");
}
</style><path class="c55_stbkz"/>`,
		"fallback": "keyline-icons:align-right-sharp",
	});
}

export default Component;
