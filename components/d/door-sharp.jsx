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
		"content": `<style>.rijrl-bhx {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 21L6 3L18 3L18 21L6 21ZM1 21L23 21M14 10L14 14");
}
</style><path class="rijrl-bhx"/>`,
		"fallback": "keyline-icons:door-sharp",
	});
}

export default Component;
