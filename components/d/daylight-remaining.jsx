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
		"content": `<style>.a6k62accz {
  d: path("M18 16.5V18l1.25 1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w32tx9cwj {
  d: path("M2.5 12h15.4m.2 0h3.4m-15 0a4.5 4.5 0 0 1 9 0M11 4.75V2.5M6 7L4.5 5.5M16 7l1.5-1.5M14.75 18a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="w32tx9cwj"/><path class="a6k62accz"/></g>`,
		"fallback": "uix-sharp:daylight-remaining",
	});
}

export default Component;
