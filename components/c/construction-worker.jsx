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
		"content": `<style>.kmh_f-bah {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 8.5a5 5 0 0 1 10 0m-12 0h14m-10.5 0V10a3.5 3.5 0 0 0 7 0V8.5M4 21.5c0-3.25 3.5-5.25 8-5.25s8 2 8 5.25M9 16.75v4.75m6-4.75v4.75");
}
</style><path class="kmh_f-bah"/>`,
		"fallback": "uix-sharp:construction-worker",
	});
}

export default Component;
