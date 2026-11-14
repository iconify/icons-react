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
		"content": `<style>.iej5m7q0o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.093 5h7.814a1.5 1.5 0 0 1 1.428 1.041l3.535 11A1.5 1.5 0 0 1 19.442 19H4.558a1.5 1.5 0 0 1-1.428-1.959l3.535-11A1.5 1.5 0 0 1 8.093 5m2.157 0l-1.5 14m5-14l1.5 14m-10.5-7H9.5m4.75-3h4");
}
</style><path class="iej5m7q0o"/>`,
		"fallback": "uix:decking-boards",
	});
}

export default Component;
