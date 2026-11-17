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
		"content": `<style>.y1mtn7byw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19 9V4l-7 7l-7-7v9l7 7l7-7z");
}
</style><path class="y1mtn7byw"/>`,
		"fallback": "coolicons:arrow-badge-down-duocolor-sharp",
	});
}

export default Component;
