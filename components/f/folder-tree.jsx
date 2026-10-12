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
		"content": `<style>.szs117bsq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 4A1.25 1.25 0 0 1 4 2.75h1.75l1 1H9A1.25 1.25 0 0 1 10.25 5v1.5A1.25 1.25 0 0 1 9 7.75H4A1.25 1.25 0 0 1 2.75 6.5Zm11 6.25A1.25 1.25 0 0 1 15 9h1.75l1 1H20a1.25 1.25 0 0 1 1.25 1.25V12A1.25 1.25 0 0 1 20 13.25h-5A1.25 1.25 0 0 1 13.75 12Zm0 7.5A1.25 1.25 0 0 1 15 16.5h1.75l1 1H20a1.25 1.25 0 0 1 1.25 1.25v.75A1.25 1.25 0 0 1 20 20.75h-5a1.25 1.25 0 0 1-1.25-1.25Zm-7.25-7.5V19h4.75M6.5 11.75h4.75");
}
</style><path class="szs117bsq"/>`,
		"fallback": "iconoven:folder-tree",
	});
}

export default Component;
