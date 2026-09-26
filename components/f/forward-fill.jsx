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
		"content": `<style>.w5-uu1uqx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16 4L22 10L16 16M22 10L6 10C3.7909 10 2 11.7909 2 14L2 20");
}
</style><path class="w5-uu1uqx"/>`,
		"fallback": "keyline-icons:forward-fill",
	});
}

export default Component;
