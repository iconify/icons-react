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
		"content": `<style>.foe589cqz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3v16.5h9.4m-6.65-3v-6m3.25 6v-11m3.25 11V13m2.5 5l2 2L21 15.75");
}
</style><path class="foe589cqz"/>`,
		"fallback": "uix:coverage-report",
	});
}

export default Component;
