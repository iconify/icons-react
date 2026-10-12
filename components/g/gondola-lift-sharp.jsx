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
		"content": `<style>.qvwe35euu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.75 4.25l18.5 5M6.75 5.33v4.42m10-1.75v5.25m-13-3.5h6v7h-6zm10 3.5h6v7h-6zm-10-.5h6m4 3.5h6");
}
</style><path class="qvwe35euu"/>`,
		"fallback": "iconoven:gondola-lift-sharp",
	});
}

export default Component;
