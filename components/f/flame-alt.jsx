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
		"content": `<style>.ed8o58bkf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10.5 21C2 14 8 8 12 3c4 5 10 11 1.5 18Zm0 0C6 17.5 8 14.5 12 11c4 3.5 6 6.5 1.5 10");
}
</style><path class="ed8o58bkf"/>`,
		"fallback": "coolicons:flame-alt",
	});
}

export default Component;
