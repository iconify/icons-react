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
		"content": `<style>.fv_3r6but {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Zm4.25-4.25l3.5 1.5m7-1.5l-3.5 1.5M9 12h.01M15 12h.01");
}

.ld4r858hn {
  d: path("m7.5 17.5l2.25-2l2.25 2l2.25-2l2.25 2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fv_3r6but"/><path class="ld4r858hn"/></g>`,
		"fallback": "uix-sharp:face-cursing",
	});
}

export default Component;
