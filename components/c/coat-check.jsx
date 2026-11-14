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
		"content": `<style>.dtjrp_bfl {
  d: path("M4 3h16m-8 0v3m0 0L7.5 7.5L5 21h14L16.5 7.5Z");
}

.mzdlqyw0t {
  d: path("m9 7l3 5l3-5m-3 5v9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dtjrp_bfl"/><path class="mzdlqyw0t"/></g>`,
		"fallback": "uix-sharp:coat-check",
	});
}

export default Component;
