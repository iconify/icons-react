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
		"content": `<style>.e0t7_l4gm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m11 12l5 5l5-5M3 7h13v10");
}
</style><path class="e0t7_l4gm"/>`,
		"fallback": "coolicons:arrow-turn-right-down-duotone-sharp",
	});
}

export default Component;
