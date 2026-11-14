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
		"content": `<style>.f-ihjacfc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 3v15.5M8 4q3-1.5 6 .25q2.5 1.5 5.5.25V11q-3 1.25-5.5-.25Q11 9 8 10.5M3 21q9-6 18 0");
}
</style><path class="f-ihjacfc"/>`,
		"fallback": "uix-sharp:flag-territory",
	});
}

export default Component;
