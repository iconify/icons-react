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
		"content": `<style>.c96qk0bkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6 9.5l-2.5-1l2.75-1.25C7 4.5 11.5 3.5 14 5.5s3 5 2.75 7l3.5 5.5l-2.25.75l-3.5-3c-3.5 1.75-8.25.25-8.5-4Zm-3 10h10.5M9 8h.01m1.49 8.75v2.75");
}
</style><path class="c96qk0bkq"/>`,
		"fallback": "uix-sharp:chickadee",
	});
}

export default Component;
