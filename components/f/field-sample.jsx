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
		"content": `<style>.mmge5mg2s {
  d: path("M9 18c0-2.75 1.25-4 3-4s3 1.25 3 4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zf-ez7bmu {
  d: path("M7 3h10v3H7ZM6 8.75h12V21.5H6Z");
}
</style><g class="ulnmmdpxh"><path class="zf-ez7bmu"/><path class="mmge5mg2s"/></g>`,
		"fallback": "uix-sharp:field-sample",
	});
}

export default Component;
