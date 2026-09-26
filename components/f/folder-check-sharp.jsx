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
		"content": `<style>.wtibcdcok {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 20L3 20L3 4L9.5 4L12 6.5L21 6.5L21 11M14.7071 16.7071L17 19L21.2929 14.7071");
}
</style><path class="wtibcdcok"/>`,
		"fallback": "keyline-icons:folder-check-sharp",
	});
}

export default Component;
