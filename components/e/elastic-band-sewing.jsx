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
		"content": `<style>.b5nepebom {
  d: path("M2.5 7h19v10h-19Z");
}

.j8olcgb-p {
  d: path("m5.75 14l2.5-4l2.5 4l2.5-4l2.5 4l2.5-4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="b5nepebom"/><path class="j8olcgb-p"/></g>`,
		"fallback": "uix-sharp:elastic-band-sewing",
	});
}

export default Component;
