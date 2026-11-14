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
		"content": `<style>.fbr5wkb-n {
  d: path("M2.5 12a9.5 7.5 0 1 0 19 0a9.5 7.5 0 1 0-19 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w0rqltbax {
  d: path("m13 7.5l-3.5 4.75h5l-3.5 4.5");
}
</style><g class="ulnmmdpxh"><path class="fbr5wkb-n"/><path class="w0rqltbax"/></g>`,
		"fallback": "uix-sharp:cellular-respiration",
	});
}

export default Component;
