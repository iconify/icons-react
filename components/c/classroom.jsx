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
		"content": `<style>.u_-hc4bdc {
  d: path("M2.5 3.5h19v13h-19Zm4.5 13L5 21m12-4.5l2 4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xynds5buu {
  d: path("M10.5 8a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm-1.75 5.5c0-2 1.25-2.75 3.25-2.75s3.25.75 3.25 2.75");
}
</style><g class="ulnmmdpxh"><path class="u_-hc4bdc"/><path class="xynds5buu"/></g>`,
		"fallback": "uix-sharp:classroom",
	});
}

export default Component;
