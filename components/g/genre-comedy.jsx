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
		"content": `<style>.j_vlj-44d {
  d: path("M6.5 9.5a2 2 0 0 1 4 0m3 0a2 2 0 0 1 4 0M7 13.5q5 1.5 10 0q-5 6.5-10 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vnoccubap {
  d: path("M3 4q9-2.5 18 0v6c0 7-4.5 11.5-9 11.5S3 17 3 10Z");
}
</style><g class="ulnmmdpxh"><path class="vnoccubap"/><path class="j_vlj-44d"/></g>`,
		"fallback": "uix-sharp:genre-comedy",
	});
}

export default Component;
