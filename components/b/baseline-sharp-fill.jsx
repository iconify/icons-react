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
		"content": `<style>.gryy93b2f {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5.7402 17.6061L12 3L18.2598 17.6061M7.7131 13L16.2869 13M2 21L22 21");
}
</style><path class="gryy93b2f"/>`,
		"fallback": "keyline-icons:baseline-sharp-fill",
	});
}

export default Component;
