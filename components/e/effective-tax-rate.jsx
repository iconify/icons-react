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
		"content": `<style>.puma85-xq {
  d: path("M4.5 2.5h15V21L17 19.5L14.5 21L12 19.5L9.5 21L7 19.5L4.5 21Zm11 4.5l-7 8.5");
}

.svt51ub0y {
  d: path("M7.5 8a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm6 6.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="puma85-xq"/><path class="svt51ub0y"/></g>`,
		"fallback": "uix-sharp:effective-tax-rate",
	});
}

export default Component;
