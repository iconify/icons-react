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
		"content": `<style>.dlrlv_eqd {
  d: path("M4 10h16v11.5H4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zjmit8beu {
  d: path("M7.5 13.5h9V18h-9ZM8 7.25C6.5 5.75 9.5 4 8 2.5m4 4.75C10.5 5.75 13.5 4 12 2.5m4 4.75C14.5 5.75 17.5 4 16 2.5");
}
</style><g class="ulnmmdpxh"><path class="dlrlv_eqd"/><path class="zjmit8beu"/></g>`,
		"fallback": "uix-sharp:curing-oven",
	});
}

export default Component;
