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
		"content": `<style>.h4zwelppu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h19v5h-3v5.5h-3V18h-2v3.5h-3V18h-2v-4.5h-3V8h-3Zm3 5h13m-10 5.5h7");
}
</style><path class="h4zwelppu"/>`,
		"fallback": "uix:chart-funnel-steps",
	});
}

export default Component;
