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
		"content": `<style>.ml2y4kw_y {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 2L3 21L22 21M7 5L16 5L16 9L7 9L7 5ZM7 13L19 13L19 17L7 17L7 13ZM12 5L12 9M14 13L14 17");
}
</style><path class="ml2y4kw_y"/>`,
		"fallback": "keyline-icons:chart-bar-stacked-sharp",
	});
}

export default Component;
