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
		"content": `<style>.a2b4dpb6v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 13V9h14v4a7 7 0 0 1-14 0m14-3h2a2 2 0 1 1 0 4h-2M7 4L6 6m5-2l-1 2m5-2l-1 2");
}
</style><path class="a2b4dpb6v"/>`,
		"fallback": "coolicons:coffee-sharp",
	});
}

export default Component;
