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
		"content": `<style>.bk8czobin {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17 21.5H6.5a2 2 0 0 1-2-2V14a2 2 0 0 1 2-2H16m-1.5-8.5h5V12h-5Z");
}
</style><path class="bk8czobin"/>`,
		"fallback": "uix-sharp:cesca-chair",
	});
}

export default Component;
