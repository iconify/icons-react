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
		"content": `<style>.tr0-57bxf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Zm0 6l4-4a2.83 2.83 0 0 1 4 0l2 2a1.414 1.414 0 0 0 2 0l1-1a1.414 1.414 0 0 1 2 0l3 3M3 21h7m4 0h7");
}
</style><path class="tr0-57bxf"/>`,
		"fallback": "coolicons:gallery-round",
	});
}

export default Component;
