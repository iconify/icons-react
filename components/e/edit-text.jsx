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
		"content": `<style>.j7zgb86wk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 5h17m-17 5H14M3.5 15H9m11.243-4.243za1.5 1.5 0 0 1 0 2.122l-5.01 5.009a1.5 1.5 0 0 1-.697.395l-1.011.253a.875.875 0 0 1-1.061-1.061l.253-1.011a1.5 1.5 0 0 1 .395-.697l5.009-5.01a1.5 1.5 0 0 1 2.122 0");
}
</style><path class="j7zgb86wk"/>`,
		"fallback": "uix:edit-text",
	});
}

export default Component;
