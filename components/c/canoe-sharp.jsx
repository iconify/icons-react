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
		"content": `<style>.e7n5_-acq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 13.25C4 17.5 7.5 20.5 12 20.5s8-3 9.25-7.25L19.85 15H4.15zm12.75-10L13.6 7.4m.17.48l.16.54l.17.58l-.29.52l-1.32 2.36l-.29.52l-.54-.26l-.82-.38l-.54-.26l.24-.55l1.02-2.4l.24-.55l.56-.22l.68-.26l.56-.22z");
}
</style><path class="e7n5_-acq"/>`,
		"fallback": "iconoven:canoe-sharp",
	});
}

export default Component;
