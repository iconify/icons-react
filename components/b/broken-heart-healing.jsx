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
		"content": `<style>.i-yu_vbmz {
  d: path("m12 20.5l-7.75-7.75A4.25 4.25 0 0 1 12 6.5a4.25 4.25 0 0 1 7.75 6.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ulr0axbnj {
  d: path("M12 6.5L10.75 9L12 11m0 3.5l1.25 2.5L12 20.5M8.5 11h7v3.5h-7Z");
}
</style><g class="ulnmmdpxh"><path class="i-yu_vbmz"/><path class="ulr0axbnj"/></g>`,
		"fallback": "uix-sharp:broken-heart-healing",
	});
}

export default Component;
