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
		"content": `<style>.f-lt9wfqp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 3v15m0-14.5h10l-2.5 3.75L20 11H10M4 21q6-6 12 0Z");
}
</style><path class="f-lt9wfqp"/>`,
		"fallback": "uix-sharp:capture-flag",
	});
}

export default Component;
