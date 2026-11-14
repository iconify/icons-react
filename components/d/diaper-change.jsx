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
		"content": `<style>.x9i_sbhvz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4.75h13.5V8c-2.75.5-4.5 2.75-5 6.5H7.75C7.5 10.75 5.5 8.5 3 8Zm0 2h13.5m-2 9.25H21m-1.75-1.75L21 16l-1.75 1.75M21.5 20H15m1.75-1.75L15 20l1.75 1.75");
}
</style><path class="x9i_sbhvz"/>`,
		"fallback": "uix:diaper-change",
	});
}

export default Component;
