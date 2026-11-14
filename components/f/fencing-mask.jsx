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
		"content": `<style>.r5g9lebqg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.75 2.5h2.5a5.25 5.25 0 0 1 5.25 5.25v2.5a5.25 5.25 0 0 1-5.25 5.25h-2.5a5.25 5.25 0 0 1-5.25-5.25v-2.5a5.25 5.25 0 0 1 5.25-5.25M7.5 18.25h9l3 3.25h-15ZM10 6v6.5M14 6v6.5");
}
</style><path class="r5g9lebqg"/>`,
		"fallback": "uix:fencing-mask",
	});
}

export default Component;
