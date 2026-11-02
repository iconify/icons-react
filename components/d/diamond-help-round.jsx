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
		"content": `<style>.qhym1fszd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m17 18l-2 2a4.243 4.243 0 0 1-6 0l-5-5a4.243 4.243 0 0 1 0-6l5-5a4.243 4.243 0 0 1 6 0l5 5a4.243 4.243 0 0 1 0 6zm-7-7a2 2 0 1 1 2 2m0 3h.01");
}
</style><path class="qhym1fszd"/>`,
		"fallback": "coolicons:diamond-help-round",
	});
}

export default Component;
