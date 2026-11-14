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
		"content": `<style>.ev7yv4aqr {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Zm5-4.75L10 6m6.5 1.25L14 6");
}

.qydxgxbym {
  d: path("m7.75 9.75l2.5 1.25l-2.5 1.25Zm8.5 0L13.75 11l2.5 1.25Zm-7.75 7q1.75-1.75 3.5 0t3.5 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ev7yv4aqr"/><path class="qydxgxbym"/></g>`,
		"fallback": "uix-sharp:face-anguished",
	});
}

export default Component;
