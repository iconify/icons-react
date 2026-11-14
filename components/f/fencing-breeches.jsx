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
		"content": `<style>.lyeittbgs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 2.5h14V6H5ZM5 6l-.75 15h6.25L12 11l1.5 10h6.25L19 6M4.5 18h6.25m2.5 0h6.25");
}
</style><path class="lyeittbgs"/>`,
		"fallback": "uix-sharp:fencing-breeches",
	});
}

export default Component;
