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
		"content": `<style>.nocjvskhe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 2.5h10v4L14 9h-4L7 6.5ZM3.5 17.75h17c0 2.25-1.5 3.75-4 3.75h-9c-2.5 0-4-1.5-4-3.75Zm8.5-6V15m-2.25-2.25L12 15l2.25-2.25");
}
</style><path class="nocjvskhe"/>`,
		"fallback": "uix-sharp:automatic-feeder",
	});
}

export default Component;
