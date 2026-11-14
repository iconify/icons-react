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
		"content": `<style>.wxg7ihbeh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 7a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0M3 21c0-4.5 3.25-7.5 7-7.5a7 7 0 0 1 1.734.22m3.766-.22h5a1 1 0 0 1 1 1V18a1 1 0 0 1-1 1H18l-2.5 2v-2a1 1 0 0 1-1-1v-3.5a1 1 0 0 1 1-1");
}
</style><path class="wxg7ihbeh"/>`,
		"fallback": "uix:community-manager",
	});
}

export default Component;
