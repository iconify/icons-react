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
		"content": `<style>.s9bss6bvr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 3v16l4-3.75L13 21l2.75-1.25l-2.5-5.75h5.25Z");
}
</style><path class="s9bss6bvr"/>`,
		"fallback": "uix-sharp:cursor",
	});
}

export default Component;
