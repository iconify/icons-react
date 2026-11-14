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
		"content": `<style>.lowe75bmn {
  d: path("M4 2.5h9.5l5 5v11H4Z");
}

.qory6h5iq {
  d: path("M4 18.5L6.5 21H21V10l-2.5-2.5m-5-5v5h5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lowe75bmn"/><path class="qory6h5iq"/></g>`,
		"fallback": "uix-sharp:cardstock",
	});
}

export default Component;
