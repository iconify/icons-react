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
		"content": `<style>.pyxu1ob3j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 12a7 7 0 0 1 14 0M3 12h5v7H3Zm13 0h5v7h-5Z");
}
</style><path class="pyxu1ob3j"/>`,
		"fallback": "coolicons:headphones-duocolor-sharp",
	});
}

export default Component;
