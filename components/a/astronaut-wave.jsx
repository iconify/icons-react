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
		"content": `<style>.efjy78b9o {
  d: path("M4.75 7.75a5.25 5.25 0 1 0 10.5 0a5.25 5.25 0 1 0-10.5 0ZM3 21.5c0-3.5 3-5.75 7-5.75s7 2.25 7 5.75m-1.5-4l4.5-12");
}

.ssd2uibvh {
  d: path("M7.5 6.25h5v3h-5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="efjy78b9o"/><path class="ssd2uibvh"/></g>`,
		"fallback": "uix-sharp:astronaut-wave",
	});
}

export default Component;
