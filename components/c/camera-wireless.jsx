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
		"content": `<style>.ik96hmp-u {
  d: path("M6.75 15a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm9.656-8.381a3.5 3.5 0 0 1 2.475 2.475m-1.763-5.131a6.25 6.25 0 0 1 4.419 4.419");
}

.qlnlfob5e {
  d: path("M2.5 10h13v10h-13Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qlnlfob5e"/><path class="ik96hmp-u"/></g>`,
		"fallback": "uix-sharp:camera-wireless",
	});
}

export default Component;
