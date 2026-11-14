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
		"content": `<style>.b7w1ydb1k {
  d: path("m2.5 11.5l2.5-7L12 3l7.5 1.5l2 9.5l-3 6.5H6Z");
}

.cpwizubfo {
  d: path("M8.25 10C6.5 10 5.5 11 5.5 12.25s1 2.25 2.75 2.25Zm0 2.25h8.25M11 10v4.5m2.75-4.5v4.5m4.75-4.25l-2 2l2 2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="b7w1ydb1k"/><path class="cpwizubfo"/></g>`,
		"fallback": "uix-sharp:fossil-in-rock",
	});
}

export default Component;
