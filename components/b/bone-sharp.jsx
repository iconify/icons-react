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
		"content": `<style>.iq34xl16r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17 10c.7-.7 1.3 0 2 0a2 2 0 1 0 0-4a1 1 0 0 1-1-1a2 2 0 1 0-4 0c0 .7.7 1.3 0 2l-7 7c-.7.7-1.3 0-2 0a2 2 0 1 0 0 4a1 1 0 0 1 1 1a2 2 0 1 0 4 0c0-.7-.7-1.3 0-2Z");
}
</style><path class="iq34xl16r"/>`,
		"fallback": "coolicons:bone-sharp",
	});
}

export default Component;
