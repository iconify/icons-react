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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vlmaa__kq {
  d: path("M3.5 8h17v2a8.5 8.5 0 0 1-17 0ZM12 3v5");
}

.wbmv65bzl {
  d: path("M9.75 11a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="vlmaa__kq"/><path class="wbmv65bzl"/></g>`,
		"fallback": "uix-sharp:cctv-dome",
	});
}

export default Component;
