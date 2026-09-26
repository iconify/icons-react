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
		"content": `<style>.nvuv9-98d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10.2634 4.008L2.2659 18.008C1.5043 19.3413 2.467 21 4.0025 21L19.9975 21C21.533 21 22.4958 19.3413 21.7341 18.008L13.7366 4.008C12.9689 2.6641 11.0311 2.6641 10.2634 4.008ZM7.4117 9L16.5883 9M3.9842 15L20.0158 15");
}
</style><path class="nvuv9-98d"/>`,
		"fallback": "keyline-icons:chart-pyramid",
	});
}

export default Component;
