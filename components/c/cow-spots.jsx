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
		"content": `<style>.d7tvy6b1a {
  d: path("M7.5 7.5H21v8H7.5Zm0 1.5H4c-1 0-1.5.75-1.5 1.75v1.5c0 1 .75 1.5 1.75 1.25l3.25-1M4.75 9L4 6m5.75 9.5v4m9-4v4");
}

.f47tdgiok {
  d: path("M11 7.5c0 2.5 1 3.5 2.25 3.5s2.25-1 2.25-3.5Zm4 8c0-2 1-2.75 2.25-2.75s2 1 2 2.75Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="d7tvy6b1a"/><path class="f47tdgiok"/></g>`,
		"fallback": "uix-sharp:cow-spots",
	});
}

export default Component;
