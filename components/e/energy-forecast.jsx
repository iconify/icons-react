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
		"content": `<style>.lsv5dzbqy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3v17.5H21m-13.5 0v-4m4 4V14m4 6.5V12M14 9.5l2-2m2-2l2-2");
}
</style><path class="lsv5dzbqy"/>`,
		"fallback": "uix-sharp:energy-forecast",
	});
}

export default Component;
