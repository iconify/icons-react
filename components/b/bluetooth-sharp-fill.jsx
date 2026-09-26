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
		"content": `<style>.wj8mcob3p {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.7071 6.7071L17 17L12 22L12 2L17 7L6.7071 17.2929");
}
</style><path class="wj8mcob3p"/>`,
		"fallback": "keyline-icons:bluetooth-sharp-fill",
	});
}

export default Component;
