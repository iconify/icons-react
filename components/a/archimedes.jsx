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
		"content": `<style>.m2counbfq {
  d: path("M9 7h6v8H9Zm-5 3h5m6 0h5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xy-oaab2i {
  d: path("M4 4v15a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4");
}
</style><g class="ulnmmdpxh"><path class="xy-oaab2i"/><path class="m2counbfq"/></g>`,
		"fallback": "uix-sharp:archimedes",
	});
}

export default Component;
