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
		"content": `<style>.k8q15zbcr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m17 19l4-4l-4-4m4 4H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h8");
}
</style><path class="k8q15zbcr"/>`,
		"fallback": "coolicons:arrow-u-turn-down-right",
	});
}

export default Component;
