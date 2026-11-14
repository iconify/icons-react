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
		"content": `<style>.nfh7tac_q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 15.5H8.5a1.75 1.75 0 0 1 1.75 1.75v2.5A1.75 1.75 0 0 1 8.5 21.5H4.25a1.75 1.75 0 0 1-1.75-1.75v-2.5a1.75 1.75 0 0 1 1.75-1.75m11.25 0h4.25a1.75 1.75 0 0 1 1.75 1.75v2.5a1.75 1.75 0 0 1-1.75 1.75H15.5a1.75 1.75 0 0 1-1.75-1.75v-2.5a1.75 1.75 0 0 1 1.75-1.75M4 4.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m11.5 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m-12.5 8c0-1.75 1.5-3 3.25-3s3.25 1.25 3.25 3m5 0c0-1.75 1.5-3 3.25-3S21 11 21 12.75");
}
</style><path class="nfh7tac_q"/>`,
		"fallback": "uix:election-podium-two",
	});
}

export default Component;
