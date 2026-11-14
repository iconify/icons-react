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
		"content": `<style>.u9479rl5l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 5L4 19M9 5L7.5 19m-5-9.5H10m-7.75 5H9.5m2.75 4.5h1.5m2.5 0h1.5m2.5 0h1.5");
}
</style><path class="u9479rl5l"/>`,
		"fallback": "uix-sharp:account-number",
	});
}

export default Component;
