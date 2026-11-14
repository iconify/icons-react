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
		"content": `<style>.jmfzqe8dg {
  d: path("M14.824 12.646Q8.662 14.189 2.5 9V4q9.5 7 19 0v5q-2.192 1.846-4.385 2.84M15.5 19a2.5 2.75 0 1 0 5 0a2.5 2.75 0 1 0-5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wmeuyqb3u {
  d: path("m16.5 15l1.5 1.25L19.5 15m-4.75 4h6.5");
}
</style><g class="ulnmmdpxh"><path class="jmfzqe8dg"/><path class="wmeuyqb3u"/></g>`,
		"fallback": "uix-sharp:flea-collar",
	});
}

export default Component;
