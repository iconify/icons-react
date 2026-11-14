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
		"content": `<style>.ap2dmzunj {
  d: path("m3 6l2 13.5q.25 1 1.5 1h5.25m5.253-7.773L18 6");
}

.exggwzbgh {
  d: path("M3 6a7.5 2.5 0 1 0 15 0A7.5 2.5 0 1 0 3 6Zm12.25 10.75l3-1.5l3 1.5l-3 1.5Zm0 3l3 1.5l3-1.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ap2dmzunj"/><path class="exggwzbgh"/></g>`,
		"fallback": "uix-sharp:bucket-versioning",
	});
}

export default Component;
