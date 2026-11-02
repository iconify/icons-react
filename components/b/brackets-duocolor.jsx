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
		"content": `<style>.nq8470bsr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 7H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2M17 7h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2");
}
</style><path class="nq8470bsr"/>`,
		"fallback": "coolicons:brackets-duocolor",
	});
}

export default Component;
