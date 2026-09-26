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
		"content": `<style>.l-2i7nb1i {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 4L23 4M3 12L23 12M1 20L15 20");
}
</style><path class="l-2i7nb1i"/>`,
		"fallback": "keyline-icons:align-offset-bottom-sharp",
	});
}

export default Component;
