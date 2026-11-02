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
		"content": `<style>.oeu1fnbcd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 18a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h11a5 5 0 0 1 5 5v6a2 2 0 0 1-2 2M9 18h6M3 10h12M9 5v5m5-5l1 5v1a1 1 0 0 0 1 1h5M5 18a2 2 0 1 0 4 0a2 2 0 0 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 0 0-4 0");
}
</style><path class="oeu1fnbcd"/>`,
		"fallback": "coolicons:coach",
	});
}

export default Component;
