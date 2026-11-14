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
		"content": `<style>.ap2347yrn {
  d: path("M13.71 17.895L10.5 19.5l-8-4v-9l8-4l8 4v6.556");
}

.k51mqjbge {
  d: path("m2.5 6.5l8 4l8-4m-8 4v9m-4-15l8 4m0 6L21 21m0-6.5L14.5 21");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ap2347yrn"/><path class="k51mqjbge"/></g>`,
		"fallback": "uix-sharp:cache-miss",
	});
}

export default Component;
