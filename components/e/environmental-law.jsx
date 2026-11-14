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
		"content": `<style>.r-chfdbqi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 2.5V19m-2.5 0h3.8M5.25 5.5h11.5M8 13L5.25 5.5L2.5 13A2.75 2.75 0 0 0 8 13Zm11.087-1.127L16.75 5.5L14 13q0 .332.079.654t.232.617M15 21c0-4.5 2-6.5 6.5-6.5c0 4.5-2 6.5-6.5 6.5Zm-1 1l4-4");
}
</style><path class="r-chfdbqi"/>`,
		"fallback": "uix-sharp:environmental-law",
	});
}

export default Component;
