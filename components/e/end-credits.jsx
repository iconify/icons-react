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
		"content": `<style>.llpealb9g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5H15v14H2.5ZM6 9h5.5M7 12h3.5M6 15h5.5m8.25 4V5m-2 2l2-2l2 2");
}
</style><path class="llpealb9g"/>`,
		"fallback": "uix-sharp:end-credits",
	});
}

export default Component;
