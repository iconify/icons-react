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
		"content": `<style>.pb5-nr3pd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4.25H17m-14.5 5h5.3m-5.3 5h4.9m-4.9 5H9m1-7a5 5 0 1 0 10 0a5 5 0 1 0-10 0m8.5 3.5l3 3");
}
</style><path class="pb5-nr3pd"/>`,
		"fallback": "uix:full-text-search",
	});
}

export default Component;
