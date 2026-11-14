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
		"content": `<style>.b0_9noz8a {
  d: path("M10.75 22L12 19l1.25 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wja4vmrin {
  d: path("m12 5.75l2 3.5h4l-2 3.5l2 3.5h-4l-2 3.5l-2-3.5H6l2-3.5l-2-3.5h4ZM10.5 3.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM12 5v1.5");
}
</style><g class="ulnmmdpxh"><path class="wja4vmrin"/><path class="b0_9noz8a"/></g>`,
		"fallback": "uix-sharp:diwali-lantern",
	});
}

export default Component;
