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
		"content": `<style>.r4-dgxb6y {
  d: path("M4.25 12.5L8 8.25l4 4.25l4-4.25l3.75 4.25m-10.25 5l2.5-5l2.5 5");
}

.rjw-hn10r {
  d: path("M3 17.5a9 10.5 0 0 1 18 0Zm1.25-5h15.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rjw-hn10r"/><path class="r4-dgxb6y"/></g>`,
		"fallback": "uix-sharp:geodesic-tent",
	});
}

export default Component;
