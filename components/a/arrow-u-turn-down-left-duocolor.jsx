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
		"content": `<style>.j51va84ik {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m7 11l-4 4l4 4m-4-4h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-8");
}
</style><path class="j51va84ik"/>`,
		"fallback": "coolicons:arrow-u-turn-down-left-duocolor",
	});
}

export default Component;
