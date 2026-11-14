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
		"content": `<style>.g6ulkabjn {
  d: path("M2.5 2.5h19v19h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zpjwrce4n {
  d: path("M7.5 6.5H17v5H7.5Zm0 .75l-2.25-1v5.5l2.25-1Zm6 4.25v4h5.25m0-2.25v4.5");
}
</style><g class="ulnmmdpxh"><path class="g6ulkabjn"/><path class="zpjwrce4n"/></g>`,
		"fallback": "uix-sharp:cctv-notice",
	});
}

export default Component;
