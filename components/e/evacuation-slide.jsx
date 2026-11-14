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
		"content": `<style>.a46rqbc_i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5h7v10H3Zm7 7c5 0 5.5 11.5 11.5 11.5m-19 0H13");
}
</style><path class="a46rqbc_i"/>`,
		"fallback": "uix-sharp:evacuation-slide",
	});
}

export default Component;
