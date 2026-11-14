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
		"content": `<style>.jetx_h3dt {
  d: path("M5 3h9.5v5.5a6.5 6.5 0 1 1-6 6H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z9yitsptu {
  fill: currentColor;
  d: path("M13.25 7.25h2.5v2.5h-2.5Zm-6 6h2.5v2.5h-2.5Z");
}
</style><g class="ulnmmdpxh"><path class="jetx_h3dt"/><path class="z9yitsptu"/></g>`,
		"fallback": "uix-sharp:compound-path",
	});
}

export default Component;
