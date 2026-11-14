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
		"content": `<style>.vguvy4q1g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5V21h8.3m-4.8-5v-3.5M10 16V9m3.5 7V5.5m5.914 9.111l2.475 2.475l-5.303 5.303l-2.475-2.475Zm-2.651 2.652l2.474 2.474");
}
</style><path class="vguvy4q1g"/>`,
		"fallback": "uix-sharp:dose-chart",
	});
}

export default Component;
