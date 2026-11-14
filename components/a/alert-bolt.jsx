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
		"content": `<style>.nyc_g233d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16.553 11.743L17.5 10.5h-6l1-8l-8 10.5h6l-1 8l5.719-7.507M18 14.5V18m0 3h.01");
}
</style><path class="nyc_g233d"/>`,
		"fallback": "uix-sharp:alert-bolt",
	});
}

export default Component;
