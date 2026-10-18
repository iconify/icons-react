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
		"content": `<style>.h_4kzacws {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3L21 3L21 17L3 17L3 3ZM2 21L7 21M9.5 21L14.5 21M17 21L22 21");
}
</style><path class="h_4kzacws"/>`,
		"fallback": "keyline-icons:gallery-thumbnails-sharp",
	});
}

export default Component;
