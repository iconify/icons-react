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
		"content": `<style>.dldih4b6r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 8a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0ZM3 21.5v-1C3 17 6 15 10 15c.746 0 1.491.089 2.184.267M18.5 14v7M15 17.5h7");
}
</style><path class="dldih4b6r"/>`,
		"fallback": "uix-sharp:friend-request-game",
	});
}

export default Component;
