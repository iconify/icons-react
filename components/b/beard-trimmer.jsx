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
		"content": `<style>.wloksqbts {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.25 5.5h7.5a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 15.75 9h-7.5A1.75 1.75 0 0 1 6.5 7.25A1.75 1.75 0 0 1 8.25 5.5M8 9v10a2.5 2.5 0 0 0 2.5 2.5h3A2.5 2.5 0 0 0 16 19V9M8.5 2.5v3m3.5-3v3m3.5-3v3");
}
</style><path class="wloksqbts"/>`,
		"fallback": "uix:beard-trimmer",
	});
}

export default Component;
