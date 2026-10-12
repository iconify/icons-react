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
		"content": `<style>.ceqonmbmh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.4 7.75h7.2q.9 0 1.52.66l2.76 2.93q.62.66.01 1.32l-7.28 7.93q-.61.66-1.22 0l-7.28-7.93q-.61-.66.01-1.32l2.76-2.93q.62-.66 1.52-.66M3.75 12h16.5M10 7.75L9 12m5-4.25L15 12m3.5-9.25q.24 1.76 2 2q-1.76.24-2 2q-.24-1.76-2-2q1.76-.24 2-2");
}
</style><path class="ceqonmbmh"/>`,
		"fallback": "iconoven:gem",
	});
}

export default Component;
