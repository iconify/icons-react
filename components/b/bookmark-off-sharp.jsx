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
		"content": `<style>.nf5pmccce {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20 20L20 22L12 18.4223L4 22L4 4M6.6569 2L20 2L20 15.3431M1.7071 1.7071L22.2929 22.2929");
}
</style><path class="nf5pmccce"/>`,
		"fallback": "keyline-icons:bookmark-off-sharp",
	});
}

export default Component;
