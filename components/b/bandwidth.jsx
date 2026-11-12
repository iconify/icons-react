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
		"content": `<style>.vbbd7bbui {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 5h18M3 19h18M6 12h12M9 9l-3 3l3 3m6-6l3 3l-3 3");
}
</style><path class="vbbd7bbui"/>`,
		"fallback": "coolicons:bandwidth",
	});
}

export default Component;
