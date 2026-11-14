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

.vzirhcbtt {
  d: path("M2.5 6.75L11 11l8.5-4.25M11 11v8.5m5.25-14.75L7.75 9.5");
}

.wy7naubms {
  d: path("m11 2.5l8.5 4.25v8.5L11 19.5l-8.5-4.25v-8.5Z");
}
</style><g class="ulnmmdpxh"><path class="wy7naubms"/><path class="vzirhcbtt"/></g>`,
		"fallback": "uix-sharp:build-artifact",
	});
}

export default Component;
