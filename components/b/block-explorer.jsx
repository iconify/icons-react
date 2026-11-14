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

.v0-2yjbtf {
  d: path("m3 7l8 4.5L19 7m-8 4.5V20m4.25-2.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm4 1.75L21 21");
}

.v44smlg-m {
  d: path("M12.706 19.04L11 20l-8-4.5V7l8-4.5L19 7v5.621");
}
</style><g class="ulnmmdpxh"><path class="v44smlg-m"/><path class="v0-2yjbtf"/></g>`,
		"fallback": "uix-sharp:block-explorer",
	});
}

export default Component;
