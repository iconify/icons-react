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
		"content": `<style>.ikedptbnr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 21.5Q13 14.5 20 6a1.5 1.5 0 0 0-2-2Q9.5 11 2.5 18.5Zm0-3L9 15");
}
</style><path class="ikedptbnr"/>`,
		"fallback": "uix-sharp:bone-folder",
	});
}

export default Component;
