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
		"content": `<style>.m25hqbb9k {
  d: path("M2.5 8H14a6 6 0 1 1-6 6v-3H2.5Z");
}

.tt-aknelm {
  d: path("M15.75 6.75a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM14 14h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="m25hqbb9k"/><path class="tt-aknelm"/></g>`,
		"fallback": "uix-sharp:bosun-whistle",
	});
}

export default Component;
