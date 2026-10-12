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
		"content": `<style>.poyybho4k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8 8l8 8M7.75 7.75a2.9 1.75 45 1 0-4.1-4.1a2.9 1.75 45 1 0 4.1 4.1m12.6 12.6a2.9 1.75 45 1 0-4.1-4.1a2.9 1.75 45 1 0 4.1 4.1");
}
</style><path class="poyybho4k"/>`,
		"fallback": "iconoven:cotton-bud",
	});
}

export default Component;
