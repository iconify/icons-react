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
		"content": `<style>.aiofikbzs {
  fill: currentColor;
  d: path("M6.5 11.5h3v3h-3Zm8 4.25h3v3h-3Z");
}

.qnj07mblb {
  d: path("M3 4h18v17.5H3Zm5-1.5v3m8-3v3m-13 3h18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qnj07mblb"/><path class="aiofikbzs"/></g>`,
		"fallback": "uix-sharp:custody-calendar",
	});
}

export default Component;
