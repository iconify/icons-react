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
		"content": `<style>.m5szoogbr {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20 11L20 22L12 18.4223L4 22L4 2L11 2M17 1L17 9M13 5L21 5");
}
</style><path class="m5szoogbr"/>`,
		"fallback": "keyline-icons:bookmark-plus-sharp",
	});
}

export default Component;
