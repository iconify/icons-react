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
		"content": `<style>.he8y57bec {
  d: path("M10 12.33v8.92h4v-8.92a5 5 0 1 0-4 0Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yuxmrvcgk {
  d: path("M9.5 6.5h5a2.5 2.5 0 0 1-5 0Z");
}
</style><g class="x2cwu0gfd"><path class="he8y57bec"/><path class="yuxmrvcgk"/></g>`,
		"fallback": "iconoven:bottle-opener-sharp",
	});
}

export default Component;
