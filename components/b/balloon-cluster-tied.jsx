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
		"content": `<style>.dvmecjbvr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 8.75c-2.25 0-2.75-2-2.75-3.75a2.75 2.75 0 0 1 5.5 0c0 1.75-.5 3.75-2.75 3.75m0 0l-.75 1h1.5Zm-6.75 5c-2.25 0-2.75-2-2.75-3.75A2.75 2.75 0 0 1 8 10c0 1.75-.5 3.75-2.75 3.75m0 0l-.75 1H6Zm13.5 0c-2.25 0-2.75-2-2.75-3.75a2.75 2.75 0 0 1 5.5 0c0 1.75-.5 3.75-2.75 3.75m0 0l-.75 1h1.5ZM11 18h2a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 13 21h-2a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 11 18m-5.75-3.25L12 18m0-8.25V18m6.75-3.25L12 18");
}
</style><path class="dvmecjbvr"/>`,
		"fallback": "uix:balloon-cluster-tied",
	});
}

export default Component;
