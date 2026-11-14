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
		"content": `<style>.ffizkul3l {
  d: path("M2.5 14.5a9.5 6 0 1 0 19 0a9.5 6 0 1 0-19 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y2ce11bna {
  d: path("M6 14.5a6 3 0 1 0 12 0a6 3 0 1 0-12 0Zm6-6l-3.5-5l-1 3Zm0 0l3.5-5l1 3Z");
}
</style><g class="ulnmmdpxh"><path class="ffizkul3l"/><path class="y2ce11bna"/></g>`,
		"fallback": "uix-sharp:garter",
	});
}

export default Component;
