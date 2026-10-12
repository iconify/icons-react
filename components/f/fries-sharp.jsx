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
		"content": `<style>.sr_etnb3l {
  d: path("m9.5 14.5l2.5 1.667l2.5-1.667");
}

.trnn5yb0t {
  d: path("M5 10.25h14l-1.5 9.25l-.222 1.764l-1.778-.014h-7l-1.778.014L6.5 19.5Zm2.75 0l-.75-5m4 5V3m3 7.25L14.5 4m2.5 6.25l1-4.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="trnn5yb0t"/><path class="sr_etnb3l"/></g>`,
		"fallback": "iconoven:fries-sharp",
	});
}

export default Component;
