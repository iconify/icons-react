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
		"content": `<style>.s4mt855jw {
  d: path("M7 10h4.5l3-5h-5l2 5m3-5l2.5 5m-2.5-5L14 3h2.25M6 17v4.5m6-4.5v4.5m6-4.5v4.5");
}

.tfvgaccjd {
  d: path("M3.75 10a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Zm10 0a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tfvgaccjd"/><path class="s4mt855jw"/></g>`,
		"fallback": "uix-sharp:cycle-crossing",
	});
}

export default Component;
