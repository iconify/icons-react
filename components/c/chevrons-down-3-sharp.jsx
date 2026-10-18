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
		"content": `<style>.se88_8bar {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.7071 2.7071L12 8L17.2929 2.7071M6.7071 9.2071L12 14.5L17.2929 9.2071M6.7071 15.7071L12 21L17.2929 15.7071");
}
</style><path class="se88_8bar"/>`,
		"fallback": "keyline-icons:chevrons-down-3-sharp",
	});
}

export default Component;
