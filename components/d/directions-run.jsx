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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ytn1ebc8k {
  d: path("M13 4a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm0 4.5L10.5 14l3.5 2.5l-1.5 4.5m-2-7l-2 3.5l-4 .5");
}

.z0ljnmeyv {
  d: path("M6.5 11L9 8.5h4l2.5 3l3 .5");
}
</style><g class="ulnmmdpxh"><path class="ytn1ebc8k"/><path class="z0ljnmeyv"/></g>`,
		"fallback": "uix-sharp:directions-run",
	});
}

export default Component;
