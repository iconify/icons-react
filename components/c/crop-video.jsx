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
		"content": `<style>.a2_06xb3e {
  d: path("M10.5 9.5L14 12l-3.5 2.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wmq9xsbak {
  d: path("M6 6.5h12v11H6Zm-3.5 1v-4h4m11 0h4v4m0 9v4h-4m-11 0h-4v-4");
}
</style><g class="ulnmmdpxh"><path class="wmq9xsbak"/><path class="a2_06xb3e"/></g>`,
		"fallback": "uix-sharp:crop-video",
	});
}

export default Component;
