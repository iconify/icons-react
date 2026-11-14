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
		"content": `<style>.a4b8v2r4a {
  d: path("M7.75 10.5L12 13v5l-4.25 2.5L3.5 18v-5Zm8.5 0L20.5 13v5l-4.25 2.5L12 18v-5Z");
}

.pjze3gm1x {
  d: path("m12 3l4.25 2.5v5L12 13l-4.25-2.5v-5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pjze3gm1x"/><path class="a4b8v2r4a"/></g>`,
		"fallback": "uix-sharp:hexagon-tiles",
	});
}

export default Component;
