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
		"content": `<style>.ntj7vtbke {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4 5l4-1.5v11L4 16Zm2 10.25v5.25m-2.5 0h5m3.75-14a6 6 0 0 1 0 6m3-7.75a9.5 9.5 0 0 1 0 9.5m3-11.25a13 13 0 0 1 0 13");
}
</style><path class="ntj7vtbke"/>`,
		"fallback": "uix:antenna-patch",
	});
}

export default Component;
