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
		"content": `<style>.k2popeb4e {
  d: path("M7.5 17a6 6 0 0 1 9 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y9iyjqu1w {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0ZM9 8.5v2m6-2v2");
}
</style><g class="ulnmmdpxh"><path class="y9iyjqu1w"/><path class="k2popeb4e"/></g>`,
		"fallback": "uix-sharp:csat-unhappy",
	});
}

export default Component;
