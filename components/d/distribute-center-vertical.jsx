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
		"content": `<style>.wcvm_br_b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M18 5.688v1.625A2.19 2.19 0 0 1 15.813 9.5H8.188A2.19 2.19 0 0 1 6 7.313V5.688A2.19 2.19 0 0 1 8.188 3.5h7.625A2.19 2.19 0 0 1 18 5.688m-2.5 10.5v2.125a2.19 2.19 0 0 1-2.187 2.187h-2.625A2.19 2.19 0 0 1 8.5 18.313v-2.125A2.19 2.19 0 0 1 10.688 14h2.625a2.19 2.19 0 0 1 2.187 2.188m6-9.688H18m-12 0H2.5m19 10.75h-6m-7 0h-6");
}
</style><path class="wcvm_br_b"/>`,
		"fallback": "uix:distribute-center-vertical",
	});
}

export default Component;
