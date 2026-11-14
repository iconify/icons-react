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
		"content": `<style>.zqk-5lb_l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.5 8.75l.538-1.211A1.75 1.75 0 0 1 5.637 6.5h12.726a1.75 1.75 0 0 1 1.599 1.039L20.5 8.75A1.6 1.6 0 0 1 19.038 11H4.962A1.6 1.6 0 0 1 3.5 8.75M6.25 11h1.5a1.75 1.75 0 0 1 1.75 1.75v3a1.75 1.75 0 0 1-1.75 1.75h-1.5a1.75 1.75 0 0 1-1.75-1.75v-3A1.75 1.75 0 0 1 6.25 11m10 0h1.5a1.75 1.75 0 0 1 1.75 1.75v3a1.75 1.75 0 0 1-1.75 1.75h-1.5a1.75 1.75 0 0 1-1.75-1.75v-3A1.75 1.75 0 0 1 16.25 11");
}
</style><path class="zqk-5lb_l"/>`,
		"fallback": "uix:aerobic-step",
	});
}

export default Component;
