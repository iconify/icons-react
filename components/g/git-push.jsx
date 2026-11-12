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
		"content": `<style>.b_kwwebug {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 18a2 2 0 1 0 4 0a2 2 0 0 0-4 0m2-2V3M9 6l3-3l3 3");
}
</style><path class="b_kwwebug"/>`,
		"fallback": "coolicons:git-push",
	});
}

export default Component;
