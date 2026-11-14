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
		"content": `<style>.tg08o0bvs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h19m-9.5 0v2.25m-2.5 0h5l1 4.75h-7ZM8.5 12l-4.25 7.5M15.5 12l4.25 7.5m-15.5 0a7.75 2 0 1 0 15.5 0a7.75 2 0 1 0-15.5 0Z");
}
</style><path class="tg08o0bvs"/>`,
		"fallback": "uix-sharp:display-light-spot",
	});
}

export default Component;
