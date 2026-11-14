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
		"content": `<style>.tpny5ccpz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9.25h12.25V21.5H2.5Zm15-4.5a2 2 0 0 1 4 0C21.5 6 20.25 7 17.5 9h4.25");
}
</style><path class="tpny5ccpz"/>`,
		"fallback": "uix-sharp:area-size",
	});
}

export default Component;
