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
		"content": `<style>.a476ddbkp {
  d: path("M7.5 11.25h9l1.5 2.5q-2 2-4 0q-2 2-4 0q-2 2-4 0Z");
}

.isj115b3t {
  d: path("M6 13.75V18h12v-4.25");
}

.n5xx6kr-m {
  d: path("m2.5 10.5l9.5-8l9.5 8V21h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n5xx6kr-m"/><path class="a476ddbkp"/><path class="isj115b3t"/></g>`,
		"fallback": "uix-sharp:campground-office",
	});
}

export default Component;
