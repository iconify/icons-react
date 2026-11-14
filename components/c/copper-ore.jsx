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

.wyj7vubkk {
  d: path("M6.75 12.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm5.5-3.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM13 15a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.zypxyzbhh {
  d: path("m3 13l3-7l6-2.5L18.5 6l2.5 6.5l-3 7l-9 1Z");
}
</style><g class="ulnmmdpxh"><path class="zypxyzbhh"/><path class="wyj7vubkk"/></g>`,
		"fallback": "uix-sharp:copper-ore",
	});
}

export default Component;
