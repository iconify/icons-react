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
		"content": `<style>.hfxxdlbpb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14h19v3h-19Zm2 3v3m7.5-3v3m7.5-3v3M3 10.75h6.5V14H3ZM4 7.5h6.5v3.25H4ZM3 4.25h6.5V7.5H3Zm11.5 6.5H21V14h-6.5Zm-1-3.25H20v3.25h-6.5Z");
}
</style><path class="hfxxdlbpb"/>`,
		"fallback": "uix-sharp:brick-pallet",
	});
}

export default Component;
