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
		"content": `<style>.q1_05pxtn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m11 17l4 4l4-4m-4 4V7a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v6");
}
</style><path class="q1_05pxtn"/>`,
		"fallback": "coolicons:arrow-u-turn-right-down-duotone-round",
	});
}

export default Component;
