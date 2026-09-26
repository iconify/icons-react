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
		"content": `<style>.oy_w0k1_x {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 4L9.5 4L12 6.5L21 6.5L21 20L3 20L3 4Z");
}
</style><path class="oy_w0k1_x"/>`,
		"fallback": "keyline-icons:folder-sharp",
	});
}

export default Component;
