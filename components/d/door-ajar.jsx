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
		"content": `<style>.en1atn9hm {
  d: path("M5 21.5V4a1.5 1.5 0 0 1 1.5-1.5h11A1.5 1.5 0 0 1 19 4v17.5m-16.5 0h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zy-8k8bmw {
  d: path("m5 4l9 1.5V20l-9 1.5Zm6.5 9h.01");
}
</style><g class="ulnmmdpxh"><path class="en1atn9hm"/><path class="zy-8k8bmw"/></g>`,
		"fallback": "uix-sharp:door-ajar",
	});
}

export default Component;
