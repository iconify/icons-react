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
		"content": `<style>.jdnamjb8f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m11 17l4 4l4-4m-4 4V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v8");
}
</style><path class="jdnamjb8f"/>`,
		"fallback": "coolicons:arrow-u-turn-right-down-duotone",
	});
}

export default Component;
