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
		"content": `<style>.d_b-5-bll {
  fill: currentColor;
  d: path("M8 13.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.g61hjg93y {
  d: path("M2.25 13.5a7.25 7.25 0 1 0 14.5 0a7.25 7.25 0 1 0-14.5 0Z");
}

.m2um35nxv {
  d: path("M9.5 12c0-5.5 2.5-9 6.5-9h5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.unthf8b2b {
  d: path("M5.5 13.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0Z");
}
</style><g class="ulnmmdpxh"><path class="g61hjg93y"/><path class="unthf8b2b"/><path class="d_b-5-bll"/><path class="m2um35nxv"/></g>`,
		"fallback": "uix-sharp:ecg-electrodes",
	});
}

export default Component;
