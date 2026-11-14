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
		"content": `<style>.lv191slds {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 3h2A2.5 2.5 0 0 1 10 5.5A2.5 2.5 0 0 1 7.5 8h-2A2.5 2.5 0 0 1 3 5.5A2.5 2.5 0 0 1 5.5 3M16 9.5h2.5A2.5 2.5 0 0 1 21 12a2.5 2.5 0 0 1-2.5 2.5H16a2.5 2.5 0 0 1-2.5-2.5A2.5 2.5 0 0 1 16 9.5m0 7h2.5A2.5 2.5 0 0 1 21 19a2.5 2.5 0 0 1-2.5 2.5H16a2.5 2.5 0 0 1-2.5-2.5a2.5 2.5 0 0 1 2.5-2.5M6.5 8v11h7m-7-7h7");
}
</style><path class="lv191slds"/>`,
		"fallback": "uix:folder-tree",
	});
}

export default Component;
