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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uls3c8b5o {
  fill: currentColor;
  d: path("M13.5 13.5h4v4h-4Z");
}

.wocaxlmgc {
  d: path("M3 4.5h18v17H3Zm5-2v4m8-4v4m-13 3h18");
}
</style><g class="ulnmmdpxh"><path class="wocaxlmgc"/><path class="uls3c8b5o"/></g>`,
		"fallback": "uix-sharp:class-booking",
	});
}

export default Component;
