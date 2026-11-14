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
		"content": `<style>.h4rmd6rmz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 16.5a9.5 9.5 0 0 1 14.25-8.25m3.5 3.5a9.5 9.5 0 0 1 1.25 4.75m-9.5 0l3-5.25m-3 5.25h.01");
}
</style><path class="h4rmd6rmz"/>`,
		"fallback": "uix-sharp:confidence-score",
	});
}

export default Component;
