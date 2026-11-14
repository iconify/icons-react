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
		"content": `<style>.b_pfhch_b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 9q4.5 5.5 9 0l2 4.5V21h-13v-7.5Zm0 0L8 3m8.5 6L16 3");
}
</style><path class="b_pfhch_b"/>`,
		"fallback": "uix-sharp:camisole",
	});
}

export default Component;
