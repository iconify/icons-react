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
		"content": `<style>.xfccm134n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4H15M3.5 4l1.75 15.5h7L14 4m4.75 9Q19 16.25 22 16.5q-3 .25-3.25 3.5q-.25-3.25-3.25-3.5q3-.25 3.25-3.5Z");
}
</style><path class="xfccm134n"/>`,
		"fallback": "uix-sharp:free-samples",
	});
}

export default Component;
