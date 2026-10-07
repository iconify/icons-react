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
		"content": `<style>.nw-purbfx {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M21 21L3 21L3 3M3 18L9 12L13 16L14.7143 14.7143M7.6569 3L21 3L21 16.3431M1.7071 1.7071L22.2929 22.2929");
}
</style><path class="nw-purbfx"/>`,
		"fallback": "keyline-icons:image-off-sharp",
	});
}

export default Component;
