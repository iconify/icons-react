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
		"content": `<style>.itfmrkb6l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.25 9.5h6.5a1.75 1.75 0 0 1 1.75 1.75v6.5a1.75 1.75 0 0 1-1.75 1.75h-6.5a1.75 1.75 0 0 1-1.75-1.75v-6.5A1.75 1.75 0 0 1 8.25 9.5m-1.75 10l10-10m-14 5h19m-10 0V3M9.25 5.25L11.5 3l2.25 2.25m5.5 7l2.25 2.25l-2.25 2.25");
}
</style><path class="itfmrkb6l"/>`,
		"fallback": "uix:beam-splitter",
	});
}

export default Component;
