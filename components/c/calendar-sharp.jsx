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
		"content": `<style>.n-mj0wift {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 5L21 5L21 21L3 21L3 5ZM6 11L18 11M8 2L8 8M16 2L16 8");
}
</style><path class="n-mj0wift"/>`,
		"fallback": "keyline-icons:calendar-sharp",
	});
}

export default Component;
