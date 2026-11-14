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
		"content": `<style>.vq3dtm2jr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 21.5L15.25 7.25M8 15.75l-2-6.5m5.75 2l4.5 4.5m2.5-11a1.5 1.5 0 1 1 1 2.5a1.5 1.5 0 1 1-2.25 1.5a1.5 1.5 0 1 1-2.25-1.5a1.5 1.5 0 1 1 1-2.5a1.5 1.5 0 1 1 2.5 0m-11.5.5a1.5 1.5 0 1 1 1 2.5A1.5 1.5 0 1 1 6 9.25a1.5 1.5 0 1 1-2.25-1.5a1.5 1.5 0 1 1 1-2.5a1.5 1.5 0 1 1 2.5 0m11.5 10.5a1.5 1.5 0 1 1 1 2.5a1.5 1.5 0 1 1-2.25 1.5a1.5 1.5 0 1 1-2.25-1.5a1.5 1.5 0 1 1 1-2.5a1.5 1.5 0 1 1 2.5 0");
}
</style><path class="vq3dtm2jr"/>`,
		"fallback": "uix:hanami-blossom-branch",
	});
}

export default Component;
