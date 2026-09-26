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
		"content": `<style>.wu5ljbbww {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.7071 5.7071L12 11L17.2929 5.7071M6.7071 12.7071L12 18L17.2929 12.7071");
}
</style><path class="wu5ljbbww"/>`,
		"fallback": "keyline-icons:chevrons-down-sharp-fill",
	});
}

export default Component;
