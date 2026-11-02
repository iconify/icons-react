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
		"content": `<style>.bg9xddb7q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 6a2 2 0 1 0 4 0a2 2 0 0 0-4 0m14 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0m2-2v-6a4 4 0 0 0-4-4h-4m3-3l-3 3l3 3M5 8v6a4 4 0 0 0 4 4h4m-3-3l3 3l-3 3");
}
</style><path class="bg9xddb7q"/>`,
		"fallback": "coolicons:git-compare-round",
	});
}

export default Component;
