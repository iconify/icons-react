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
		"content": `<style>.kn2vi4bka {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M23 12H6.941M13.176 4.706L5.754 12L13.176 19.294M2 4V20");
}
</style><path class="kn2vi4bka"/>`,
		"fallback": "keyline-icons:arrow-left-to-line-sharp-fill",
	});
}

export default Component;
