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
		"content": `<style>.g6xn2theg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 5L15 5C18.866 5 22 8.134 22 12C22 15.866 18.866 19 15 19L5 19C3.3431 19 2 17.6569 2 16L2 8C2 6.3431 3.3431 5 5 5Z");
}
</style><path class="g6xn2theg"/>`,
		"fallback": "keyline-icons:flow-delay-duotone",
	});
}

export default Component;
