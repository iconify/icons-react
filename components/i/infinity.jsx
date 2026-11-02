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
		"content": `<style>.ejzu5je1m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 16c4 0 6-8 10-8a4 4 0 1 1 0 8c-4 0-6-8-10-8m0 0a4 4 0 1 0 0 8");
}
</style><path class="ejzu5je1m"/>`,
		"fallback": "coolicons:infinity",
	});
}

export default Component;
