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
		"content": `<style>.k27f4r3fh {
  d: path("M3.25 10.5C2 20 22 20 20.75 10.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vi-pg127j {
  d: path("M3.25 10.5a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Zm10 0a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Zm-2.5 0q1.25-1.5 2.5 0");
}
</style><g class="ulnmmdpxh"><path class="vi-pg127j"/><path class="k27f4r3fh"/></g>`,
		"fallback": "uix-sharp:aviator-goggles",
	});
}

export default Component;
