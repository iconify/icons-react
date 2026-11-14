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
		"content": `<style>.xm8nii0kb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 3.5v17m-3-17V8a3 3 0 0 0 6 0V3.5m7 17v-17C14.5 5 14 8 14.5 12H17");
}
</style><path class="xm8nii0kb"/>`,
		"fallback": "uix:fork-and-knife",
	});
}

export default Component;
