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
		"content": `<style>.tjg8ob7lf {
  d: path("M5 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm10.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM6 9h5.5v3.5H6Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vlq-uhb4k {
  d: path("M2.5 17V8a2 2 0 0 1 2-2H15v11ZM15 9.5h3.5l3 3.5v4H15");
}
</style><g class="ulnmmdpxh"><path class="vlq-uhb4k"/><path class="tjg8ob7lf"/></g>`,
		"fallback": "uix-sharp:food-truck",
	});
}

export default Component;
