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
		"content": `<style>.s6-dw5boq {
  d: path("M6.5 13.25h4l-2-4.5m-1 0h2m1 4.5l4-4.5l3 4.5m-3-4.5L14 7h1.5m-13 10h19");
}

.sznc3hbok {
  d: path("M2.75 13.25a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Zm11 0a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sznc3hbok"/><path class="s6-dw5boq"/></g>`,
		"fallback": "uix-sharp:advance-stop-line",
	});
}

export default Component;
