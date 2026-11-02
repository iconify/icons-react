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
		"content": `<style>.sca4vgbly {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m14 3l7 7l-4 4l-7-7zm-1 17h8m-6-8l-8 8a2.121 2.121 0 1 1-3-3l8-8");
}
</style><path class="sca4vgbly"/>`,
		"fallback": "coolicons:gavel-sharp",
	});
}

export default Component;
