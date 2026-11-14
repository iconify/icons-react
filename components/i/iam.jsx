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
		"content": `<style>.bb3_wubui {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.772 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5c1.922 0 3.639.46 4.944 1.264M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0m8 12.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m3-1.25l3.75-3.75m-1.5 1.5l1.5 1.5");
}
</style><path class="bb3_wubui"/>`,
		"fallback": "uix:iam",
	});
}

export default Component;
