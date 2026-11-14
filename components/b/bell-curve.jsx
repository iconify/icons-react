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
		"content": `<style>.p8u760b4u {
  d: path("M3.5 3v17.5H21");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xr_p127jd {
  d: path("M6.5 17.5c4 0 4-11 7.25-11s3.25 11 7.25 11");
}
</style><g class="ulnmmdpxh"><path class="p8u760b4u"/><path class="xr_p127jd"/></g>`,
		"fallback": "uix-sharp:bell-curve",
	});
}

export default Component;
