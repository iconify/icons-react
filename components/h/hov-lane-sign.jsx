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
		"content": `<style>.dh2jzoboc {
  d: path("m12 2l10 10l-10 10L2 12Z");
}

.qcbxp-bfq {
  d: path("M7.5 13.5V12l2.25-3h4.5l2.25 3v1.5h-1a1.5 1.5 0 0 0-3 0h-1a1.5 1.5 0 0 0-3 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dh2jzoboc"/><path class="qcbxp-bfq"/></g>`,
		"fallback": "uix-sharp:hov-lane-sign",
	});
}

export default Component;
