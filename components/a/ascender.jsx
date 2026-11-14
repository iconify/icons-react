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
		"content": `<style>.zgc0g-bqz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 3v18m0-6a4.5 4.5 0 0 1 9 0v6M2.5 10.5h19m-2-2.75V3m-2 2l2-2l2 2");
}
</style><path class="zgc0g-bqz"/>`,
		"fallback": "uix-sharp:ascender",
	});
}

export default Component;
