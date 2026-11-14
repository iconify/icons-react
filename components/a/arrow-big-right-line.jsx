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
		"content": `<style>.edzryup9a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 9v6m15.953-1.453l-4.039 4.039A.828.828 0 0 1 14 17a2 2 0 0 0-2-2h-1.812A2.19 2.19 0 0 1 8 12.813v-1.625A2.19 2.19 0 0 1 10.188 9H12a2 2 0 0 0 2-2a.828.828 0 0 1 1.414-.586l4.039 4.039a2.19 2.19 0 0 1 0 3.094");
}
</style><path class="edzryup9a"/>`,
		"fallback": "uix:arrow-big-right-line",
	});
}

export default Component;
