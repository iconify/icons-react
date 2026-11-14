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
		"content": `<style>.s9ew1vufz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 2.5h13v6H5Zm15.25 2v2M4 11.25h16m-14.5 0L7 21.5h10l1.5-10.25m-6.5 3v4.25");
}
</style><path class="s9ew1vufz"/>`,
		"fallback": "uix-sharp:bin-battery",
	});
}

export default Component;
