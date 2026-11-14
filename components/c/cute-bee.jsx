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
		"content": `<style>.hkas22bvk {
  d: path("M4 14.5a7.5 5.5 0 1 0 15 0a7.5 5.5 0 1 0-15 0Z");
}

.sdq07tbkd {
  d: path("M11.5 9c-2-5-5-6.5-5.5-4.5C5.75 6 8.5 8 11.5 9Zm0 0c2-5 5-6.5 5.5-4.5C17.25 6 14.5 8 11.5 9Zm7.5 5.5h2.5m-13-5v10m6-10v10");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hkas22bvk"/><path class="sdq07tbkd"/></g>`,
		"fallback": "uix-sharp:cute-bee",
	});
}

export default Component;
