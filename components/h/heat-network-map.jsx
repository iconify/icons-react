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
		"content": `<style>.av-pj1g2t {
  d: path("M11.994 19.998L8.5 19l-6 2V5l6-2l7 2l6-2v10.071");
}

.i39a1576j {
  d: path("M5.5 15H11V9h7m-.25 3.5c.5 2 3.25 3 3.25 5.5a3.25 3.25 0 0 1-6.5 0c0-1.5.75-2.5 1.5-3.25c.25 1 .75 1.5 1.25 1.5c.5-1.25.5-2.5.5-3.75Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="av-pj1g2t"/><path class="i39a1576j"/></g>`,
		"fallback": "uix-sharp:heat-network-map",
	});
}

export default Component;
