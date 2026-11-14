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
		"content": `<style>.n1cia05ds {
  d: path("M10 16.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xxps36bcn {
  d: path("M5 3h13l2.5 6h-13Zm10.5 6v3M5 14a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Zm5.5-11L13 9");
}
</style><g class="ulnmmdpxh"><path class="xxps36bcn"/><path class="n1cia05ds"/></g>`,
		"fallback": "uix-sharp:camera-solar",
	});
}

export default Component;
