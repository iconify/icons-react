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
		"content": `<style>.smgz50k0d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 17V8.5c0-3.5 2.5-6 6-6c3.75 0 6.5 2.75 6.5 6.5v5c0 1.75-.75 3-2 3M7 9.5c-2.5 0-3.5 1.5-3.5 3c0 2 1.5 3 3.5 3m.75 1.5h9a1.75 1.75 0 0 1 1.75 1.75v1a1.75 1.75 0 0 1-1.75 1.75h-9A1.75 1.75 0 0 1 6 19.75v-1A1.75 1.75 0 0 1 7.75 17");
}
</style><path class="smgz50k0d"/>`,
		"fallback": "uix:boxing-glove",
	});
}

export default Component;
