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
		"content": `<style>.tv0kxfb5j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 18V4a1.5 1.5 0 0 1 1.5-1.5h5A1.5 1.5 0 0 1 16 4v14M2.5 18h19M6 20h12v1.75H6Zm8-9h.01");
}
</style><path class="tv0kxfb5j"/>`,
		"fallback": "uix-sharp:entryway",
	});
}

export default Component;
