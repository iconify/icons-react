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
		"content": `<style>.uoxjt6b0n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12h6.25M5.5 9l3.25 3l-3.25 3m16-3h-6.25m3.25-3l-3.25 3l3.25 3M12 4v16");
}
</style><path class="uoxjt6b0n"/>`,
		"fallback": "uix:arrows-left-right-to-line",
	});
}

export default Component;
