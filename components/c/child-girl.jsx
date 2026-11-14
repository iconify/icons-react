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
		"content": `<style>.fae2z1dip {
  d: path("m12 6.5l-2.5-4l-1.25 2.25Zm0 0l2.5-4l1.25 2.25Zm-7.5 15C4.5 19 7.75 17 12 17s7.5 2 7.5 4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zyv6rtbrm {
  d: path("M8.25 10.25a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="zyv6rtbrm"/><path class="fae2z1dip"/></g>`,
		"fallback": "uix-sharp:child-girl",
	});
}

export default Component;
