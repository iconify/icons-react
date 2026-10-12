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
		"content": `<style>.pz17v96ls {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 7.25a1.5 1.5 0 0 1 1.5-1.5h5a1.5 1.5 0 0 1 1.5 1.5v4.5l6.5 2a3 3 0 0 1 2 2.85v1.15a2 2 0 0 1-2 2h-13a1.5 1.5 0 0 1-1.5-1.5Zm8 4.5l-2.5 3.75M3.75 17h16.5");
}
</style><path class="pz17v96ls"/>`,
		"fallback": "iconoven:baby-shoes",
	});
}

export default Component;
