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
		"content": `<style>.deutbrbor {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 5L22 12L15 19L8 12L15 5ZM9.8787 5.8787L9 5L2 12L9 19L9.8787 18.1213");
}
</style><path class="deutbrbor"/>`,
		"fallback": "keyline-icons:diamonds-sharp",
	});
}

export default Component;
