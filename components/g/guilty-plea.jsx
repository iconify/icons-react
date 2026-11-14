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
		"content": `<style>.rqj76ubzl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.768 7.036l3.464-2l4 6.928l-3.464 2ZM9.25 8.5l8.75-5m-6.5 15.2V21h-9v-3.5h8.8m3.45.5l2 2L21 15.75");
}
</style><path class="rqj76ubzl"/>`,
		"fallback": "uix-sharp:guilty-plea",
	});
}

export default Component;
