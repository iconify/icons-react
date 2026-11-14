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
		"content": `<style>.oqie505-x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4h19m-18 0v17m17-17v17M9.5 4h5v3h-5ZM12 7v6m0 0v2.5a2 2 0 1 1-2 2");
}
</style><path class="oqie505-x"/>`,
		"fallback": "uix-sharp:bridge-crane",
	});
}

export default Component;
