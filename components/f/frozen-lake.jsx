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
		"content": `<style>.qfzy5efsc {
  d: path("m10 11l2 3.5l-1.5 2.5m1.5-2.5l3 1.5m2-13.5v6M14.5 4l5 3m-5 0l5-3");
}

.rww20tb5k {
  d: path("M2.5 15.5a9.5 4.5 0 1 0 19 0a9.5 4.5 0 1 0-19 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rww20tb5k"/><path class="qfzy5efsc"/></g>`,
		"fallback": "uix-sharp:frozen-lake",
	});
}

export default Component;
