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

.y26snsc_q {
  d: path("M5.5 11.5h9l2.5 6m-2.5-6l4-5");
}

.zziakns7n {
  d: path("m3 17.5l2.5-6l4-5h9l2.5 6l-4 5Z");
}
</style><g class="ulnmmdpxh"><path class="zziakns7n"/><path class="y26snsc_q"/></g>`,
		"fallback": "uix-sharp:element-aluminium",
	});
}

export default Component;
