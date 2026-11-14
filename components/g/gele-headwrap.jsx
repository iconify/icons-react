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
		"content": `<style>.azm8fslbl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.5 11l-4-6.5q8.5-3 17 0l-4 6.5Zm.5 0v1.5a4 4 0 0 0 8 0V11M4.5 21.5c0-1.5 3.25-2.25 7.5-2.25s7.5.75 7.5 2.25m-9-10.5l-.75-5m3.75 5l.75-5");
}
</style><path class="azm8fslbl"/>`,
		"fallback": "uix-sharp:gele-headwrap",
	});
}

export default Component;
