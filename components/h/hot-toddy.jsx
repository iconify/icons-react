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
		"content": `<style>.na2vrhf2b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 9.5h11.5v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Zm11.5 2h1a2.75 2.75 0 0 1 0 5.5h-1m-3.75-7.5H15L18.75 3H15.5ZM6 6.75q-1.25-1 0-2t0-2m3.75 4q-1.25-1 0-2t0-2");
}
</style><path class="na2vrhf2b"/>`,
		"fallback": "uix-sharp:hot-toddy",
	});
}

export default Component;
