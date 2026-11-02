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
		"content": `<style>.ci3t7cxvr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m4 15l4 4l4-4m-4 4V5m12 4l-4-4l-4 4m4-4v14");
}
</style><path class="ci3t7cxvr"/>`,
		"fallback": "coolicons:arrow-down-up-duocolor-round",
	});
}

export default Component;
