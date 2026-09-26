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
		"content": `<style>.yox_8jbpe {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 3L17 3L17 21L7 21L7 3ZM3 2L3 22M21 2L21 22");
}
</style><path class="yox_8jbpe"/>`,
		"fallback": "keyline-icons:gallery-horizontal-sharp",
	});
}

export default Component;
