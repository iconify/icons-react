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
		"content": `<style>.c7e9jobtm {
  d: path("M5.5 2.5H17L20.5 6v13.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-15a2 2 0 0 1 2-2Z");
}

.m3vqp1bum {
  d: path("M6 8.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm7.5.5A2.25 2.25 0 1 0 18 9a2.25 2.25 0 1 0-4.5 0Zm-5.25 4.25a2.25 2.25 0 0 1 0 4.5m7.5-4.5a2.25 2.25 0 0 1 0 4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="c7e9jobtm"/><path class="m3vqp1bum"/></g>`,
		"fallback": "uix-sharp:blister-pack-empty",
	});
}

export default Component;
