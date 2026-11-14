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
		"content": `<style>.pkd6m2bxi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 2.5V12m15-9.5V12m-17 2.5c3.5 6 15.5 6 19 0C16 16 8 16 2.5 14.5Zm2-12l5 2.25L4.5 7Zm15 0l-5 2.25l5 2.25Z");
}
</style><path class="pkd6m2bxi"/>`,
		"fallback": "uix-sharp:canoe-slalom",
	});
}

export default Component;
