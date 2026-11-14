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
		"content": `<style>.lk5dobbdk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.871 12.64C13.841 10.789 12.082 9.147 9.5 8C5 10 3 13.5 3 17c0 2.75 1.5 4 4 4h5q.521 0 .982-.073M9.5 8L7 4.5M9.5 8L12 4.5M15 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm.75-2.25l4.5 4.5");
}
</style><path class="lk5dobbdk"/>`,
		"fallback": "uix-sharp:fly-tipping",
	});
}

export default Component;
