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
		"content": `<style>.ec5pvjbfz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 13.5c-4 0-5.5-3.5-5.5-6c0-3 2.5-5 5.5-5s5.5 2 5.5 5c0 2.5-1.5 6-5.5 6Zm-4.5 8L8.75 18h6.5l1.25 3.5Zm4.5-8c-1.5 1.5 1.5 3 0 4.5");
}
</style><path class="ec5pvjbfz"/>`,
		"fallback": "uix-sharp:balloon-weight",
	});
}

export default Component;
