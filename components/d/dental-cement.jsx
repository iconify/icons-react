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
		"content": `<style>.xmesbdccd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3.5H12l5 2.25v1.5L12 9.5H3.5Zm8.5 9c-1.5 0-2.5 1-2.5 2.5s1 2.5 1.5 4l.5 2c.25.75 1.25.75 1.5 0l.75-2.5c.25-.5.75-.75 1.25-.75s1 .25 1.25.75L17 21c.25.75 1.25.75 1.5 0l.5-2c.5-1.5 1.5-2.5 1.5-4s-1-2.5-2.5-2.5c-1 0-2 .5-3 .5s-2-.5-3-.5Zm5-6q2.5 0 2.5 2.5T17 12.5");
}
</style><path class="xmesbdccd"/>`,
		"fallback": "uix-sharp:dental-cement",
	});
}

export default Component;
