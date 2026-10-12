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
		"content": `<style>.h_34ivbbt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 21.25V14.5m5.25 6.75v-10.5m6.5 10.5v-10.5m5.25 10.5V14.5M7.75 5.75a4.25 3 0 1 0 8.5 0a4.25 3 0 1 0-8.5 0Zm2.75 0h3");
}
</style><path class="h_34ivbbt"/>`,
		"fallback": "iconoven:australian-football-sharp",
	});
}

export default Component;
