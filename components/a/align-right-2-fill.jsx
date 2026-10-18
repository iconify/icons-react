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
		"content": `<style>.hp5t7cb5r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M21 3L21 21M16 4.5L3 4.5M16 9.5L3 9.5M16 14.5L6 14.5M16 19.5L10 19.5");
}
</style><path class="hp5t7cb5r"/>`,
		"fallback": "keyline-icons:align-right-2-fill",
	});
}

export default Component;
