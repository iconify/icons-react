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
		"content": `<style>.hqo-j3b8k {
  d: path("m3 15.5l2.75.75a2 2 0 0 1 4 1L21 19.75L15.5 3.5Z");
}

.qtrmunb4n {
  d: path("M11 12.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hqo-j3b8k"/><path class="qtrmunb4n"/></g>`,
		"fallback": "uix-sharp:cheese-slice",
	});
}

export default Component;
