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
		"content": `<style>.eoz3zibrm {
  d: path("M4.5 2.5h15v19h-15Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wb2thacfs {
  d: path("M7.5 6h9v4.5h-9Zm0 8.25h9M7.5 18h6");
}
</style><g class="ulnmmdpxh"><path class="eoz3zibrm"/><path class="wb2thacfs"/></g>`,
		"fallback": "uix-sharp:campaign-flyer",
	});
}

export default Component;
