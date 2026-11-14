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
		"content": `<style>.i7burgw0a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.459 2.824a9.5 9.5 0 0 1 6.717 6.717m0 4.918a9.5 9.5 0 0 1-6.717 6.717m-4.918 0a9.5 9.5 0 0 1-6.717-6.717m0-4.918a9.5 9.5 0 0 1 6.717-6.717M18.5 12l-3.75-1.25L16.5 7.5l-3.25 1.75L12 5.5l-1.25 3.75L7.5 7.5l1.75 3.25L5.5 12l3.75 1.25L7.5 16.5l3.25-1.75L12 18.5l1.25-3.75l3.25 1.75l-1.75-3.25Z");
}
</style><path class="i7burgw0a"/>`,
		"fallback": "uix-sharp:disaster-zone",
	});
}

export default Component;
