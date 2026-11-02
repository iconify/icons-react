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
		"content": `<style>.igob0ybwg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m9-9c-2.21 0-4 4.03-4 9s1.79 9 4 9m0-18c2.21 0 4 4.03 4 9s-1.79 9-4 9m-9-9h18");
}
</style><path class="igob0ybwg"/>`,
		"fallback": "coolicons:globe-duocolor-round",
	});
}

export default Component;
