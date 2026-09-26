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
		"content": `<style>.wi1rvacfp {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11.2929 17.2929L6 12L11.2929 6.7071M18.2929 17.2929L13 12L18.2929 6.7071");
}
</style><path class="wi1rvacfp"/>`,
		"fallback": "keyline-icons:chevrons-left-sharp",
	});
}

export default Component;
