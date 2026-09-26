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
		"content": `<style>.mjdnx9y7v {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 7C8 4.7909 9.7909 3 12 3C14.2091 3 16 4.7909 16 7M4 7L20 7L20 21L4 21L4 7Z");
}
</style><path class="mjdnx9y7v"/>`,
		"fallback": "keyline-icons:handbag-sharp",
	});
}

export default Component;
