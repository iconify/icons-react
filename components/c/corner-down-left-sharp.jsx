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
		"content": `<style>.skkqfibng {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.2929 20.2929L2 14L8.2929 7.7071M2 14L22 14L22 3");
}
</style><path class="skkqfibng"/>`,
		"fallback": "keyline-icons:corner-down-left-sharp",
	});
}

export default Component;
