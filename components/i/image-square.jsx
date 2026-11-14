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
		"content": `<style>.dt0rqpoly {
  d: path("M3.5 16.5L9 11l5.5 5.5l2-2l4 4m-6.75-10a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.kouyg8b6l {
  d: path("M3.5 3.5h17v17h-17Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kouyg8b6l"/><path class="dt0rqpoly"/></g>`,
		"fallback": "uix-sharp:image-square",
	});
}

export default Component;
