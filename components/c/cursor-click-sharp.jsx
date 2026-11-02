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
		"content": `<style>.na6pdcb5q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m9 9l12 4l-4 1l3 3l-3 3l-3-3l-1 4zm0-4V3M5 9H3m10-4l1-1m-9 9l-1 1");
}
</style><path class="na6pdcb5q"/>`,
		"fallback": "coolicons:cursor-click-sharp",
	});
}

export default Component;
