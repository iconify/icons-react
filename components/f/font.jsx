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
		"content": `<style>.hbbon8b5w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 18L7 6l4 12m-6-4h4m6 1a3 3 0 1 0 6 0a3 3 0 0 0-6 0m6-3v6");
}
</style><path class="hbbon8b5w"/>`,
		"fallback": "coolicons:font",
	});
}

export default Component;
