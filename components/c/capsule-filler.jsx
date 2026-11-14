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
		"content": `<style>.all6irb_y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 2.5h17l-7 6.5v2.5h-3V9Zm5 12V18a3.5 3.5 0 0 0 7 0v-3.5");
}
</style><path class="all6irb_y"/>`,
		"fallback": "uix-sharp:capsule-filler",
	});
}

export default Component;
