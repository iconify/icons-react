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
		"content": `<style>.a6810h1td {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 21H2.5V10h19v11H15v-4.5a3 3 0 0 0-6 0ZM7 10a5 5 0 0 1 10 0m-5-5V2.75");
}
</style><path class="a6810h1td"/>`,
		"fallback": "uix-sharp:caravanserai",
	});
}

export default Component;
