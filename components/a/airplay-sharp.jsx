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
		"content": `<style>.yi0c9ccqg {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5.1043 16L2 16L2 3L22 3L22 16L19.8957 16L18.8957 16M12 13L18 21L6 21L12 13Z");
}
</style><path class="yi0c9ccqg"/>`,
		"fallback": "keyline-icons:airplay-sharp",
	});
}

export default Component;
