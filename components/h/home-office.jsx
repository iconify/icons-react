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
		"content": `<style>.alqt2ccsf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21.5h5m-2.5 0v-9l5-6m-1-3l6 2l-2.5 4Zm3.5 9h8V18h-8Zm0 5.5h8l1 3h-10Z");
}
</style><path class="alqt2ccsf"/>`,
		"fallback": "uix-sharp:home-office",
	});
}

export default Component;
