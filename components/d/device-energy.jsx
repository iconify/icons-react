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
		"content": `<style>.tclq3ib_i {
  d: path("M6.75 10a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0ZM19 14l-3.5 4h4L16 21.75");
}

.ubvvdob3b {
  d: path("M10.928 19H3.5q-.098 0-.195-.019t-.188-.057t-.173-.093t-.151-.124t-.124-.151t-.093-.173t-.057-.188T2.5 18V4q0-.098.019-.195t.057-.188t.093-.173q.054-.081.124-.151t.151-.124q.082-.055.173-.093t.188-.057T3.5 3h14q.098 0 .195.019t.188.057t.173.093q.081.054.151.124t.124.151q.055.082.093.173t.057.188T18.5 4v6.386");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ubvvdob3b"/><path class="tclq3ib_i"/></g>`,
		"fallback": "uix-sharp:device-energy",
	});
}

export default Component;
