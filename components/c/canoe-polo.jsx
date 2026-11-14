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
		"content": `<style>.cdqob9bur {
  d: path("M2.5 12C5 14 8 14.5 12 14.5s7-.5 9.5-2.5c-1 5-4.5 7.5-9.5 7.5S3.5 17 2.5 12Zm11-5.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Z");
}

.r2eszj_qo {
  d: path("M14 5q3 2.5 6 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cdqob9bur"/><path class="r2eszj_qo"/></g>`,
		"fallback": "uix-sharp:canoe-polo",
	});
}

export default Component;
