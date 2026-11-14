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
		"content": `<style>.w9lv2g89l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m14.146 4.257l4.597 4.597a1.75 1.75 0 0 1 0 2.474l-1.415 1.415a1.75 1.75 0 0 1-2.474 0l-4.597-4.597a1.75 1.75 0 0 1 0-2.474l1.415-1.415a1.75 1.75 0 0 1 2.474 0M12.5 10.5L4 19m8-2.25h8a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5h-8a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5");
}
</style><path class="w9lv2g89l"/>`,
		"fallback": "uix:dispute-case",
	});
}

export default Component;
