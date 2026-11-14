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
		"content": `<style>.fwaqvoxfi {
  d: path("M2.5 8.5h19c0 6-4.5 9.5-9.5 9.5s-9.5-3.5-9.5-9.5ZM4 6l3.5 2.5M20 6l-3.5 2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v7mfnnboa {
  d: path("m6 11.5l3 2.75l3-2.75l3 2.75l3-2.75");
}
</style><g class="ulnmmdpxh"><path class="fwaqvoxfi"/><path class="v7mfnnboa"/></g>`,
		"fallback": "uix-sharp:empty-nest",
	});
}

export default Component;
