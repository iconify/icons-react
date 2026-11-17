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
		"content": `<style>.zkhvecune {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 22H2V7L12 2L22 7V22H18M18 22V11H6V22M18 22H6M22 7H2M10 18H14");
}
</style><path class="zkhvecune"/>`,
		"fallback": "keyline-icons:garage-sharp",
	});
}

export default Component;
