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
		"content": `<style>.bm5yq17cm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 4.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M6 21.5l4.5-7l6 7M9.25 8.75l1.25 5.75M4 12l5.5-2.5l5-3.5m2.75-1.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><path class="bm5yq17cm"/>`,
		"fallback": "uix:baseball-pitcher",
	});
}

export default Component;
