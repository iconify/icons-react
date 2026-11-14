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
		"content": `<style>.a6u0kzb-o {
  d: path("M3 6h5.5c1.5 2 4 2.75 6.5 3.25c4 .75 6.5 2.25 6.5 4.75c0 1.25-.75 2-2 2H8v2H3Z");
}

.sjeze2btf {
  d: path("m15 9.25l1 4.25l1.75-1L19 16M8.75 8.5l1.75-2.25m.75 3.25l1.5-2.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="a6u0kzb-o"/><path class="sjeze2btf"/></g>`,
		"fallback": "uix-sharp:brogue",
	});
}

export default Component;
