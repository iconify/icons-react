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
		"content": `<style>.nn8vn89fa {
  d: path("M2.5 10.5c1.5-2.5 4-3 6-1.5c2-1.5 4.5-1 6 1.5c-1 5-4 6.5-6 6.5s-5-1.5-6-6.5Z");
}

.pielbxb5m {
  d: path("M5.25 12q3.25 2.5 6.5 0m5.75-4L20 6m-2 6h3m-3.5 4l2.5 2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nn8vn89fa"/><path class="pielbxb5m"/></g>`,
		"fallback": "uix-sharp:beatbox",
	});
}

export default Component;
