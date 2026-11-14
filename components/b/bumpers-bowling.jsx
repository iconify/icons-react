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
		"content": `<style>.hqq6j503a {
  d: path("M10 3h4l3.5 18h-11ZM7 3L3 21M17 3l4 18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wim1xrf5s {
  d: path("M10.25 17a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM12 6.5h.01");
}
</style><g class="ulnmmdpxh"><path class="hqq6j503a"/><path class="wim1xrf5s"/></g>`,
		"fallback": "uix-sharp:bumpers-bowling",
	});
}

export default Component;
