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
		"content": `<style>.uh0j-mlwd {
  d: path("M15 5.5H9.5a4.5 4.5 0 0 0 0 9h10");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xj4tptb9e {
  d: path("m15.5 10.5l4 4l-4 4");
}
</style><g class="ulnmmdpxh"><path class="uh0j-mlwd"/><path class="xj4tptb9e"/></g>`,
		"fallback": "uix-sharp:arrow-return-right",
	});
}

export default Component;
