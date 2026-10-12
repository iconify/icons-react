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
		"content": `<style>.vmsx7wbhn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.3 11.88l8.08-8.08q.71-.71 1.42 0l1.4 1.4q.71.71 0 1.42l-8.08 8.08q-.71.71-1.42 0l-1.4-1.4q-.71-.71 0-1.42m-4.05 7.87c2-1.5 3.5-1.5 5 0s3.5 1.5 5 0s3.5-1.5 5 0");
}
</style><path class="vmsx7wbhn"/>`,
		"fallback": "iconoven:chalk",
	});
}

export default Component;
