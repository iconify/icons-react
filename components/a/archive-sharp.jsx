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
		"content": `<style>.qe3mpopda {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 4L22 4L22 9L2 9L2 4ZM4 9L4 20L20 20L20 9M9 13L15 13");
}
</style><path class="qe3mpopda"/>`,
		"fallback": "keyline-icons:archive-sharp",
	});
}

export default Component;
