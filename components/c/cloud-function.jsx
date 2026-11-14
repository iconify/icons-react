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
		"content": `<style>.al9aqwues {
  d: path("M7 18.5a4 4 0 0 1 0-8a5.5 5.5 0 0 1 10.5-.5a4.5 4.5 0 0 1 .5 8.5Z");
}

.forh6i88s {
  d: path("m10.25 11.75l-1.75 2l1.75 2m4-4l1.75 2l-1.75 2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="al9aqwues"/><path class="forh6i88s"/></g>`,
		"fallback": "uix-sharp:cloud-function",
	});
}

export default Component;
