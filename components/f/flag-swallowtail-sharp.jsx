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
		"content": `<style>.p1_hx-e9m {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 1L4 23M4 4L20 4L16.8668 10L20 16L4 16");
}
</style><path class="p1_hx-e9m"/>`,
		"fallback": "keyline-icons:flag-swallowtail-sharp",
	});
}

export default Component;
