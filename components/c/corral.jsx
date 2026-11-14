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
		"content": `<style>.nn7v5ibba {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10c4.5 3 14.5 3 19 0m-19 5c4.5 3 14.5 3 19 0M4 7.5V19m8-9.5V21m8-13.5V19");
}
</style><path class="nn7v5ibba"/>`,
		"fallback": "uix-sharp:corral",
	});
}

export default Component;
