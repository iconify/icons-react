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
		"content": `<style>.n_0yh_nev {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.5 11.5l-2-8H6l3.5 4h9a2 2 0 0 1 0 4Zm5 0l-2.5 5h2.5l4-5m5 3l-3 3.75H20L17 22");
}
</style><path class="n_0yh_nev"/>`,
		"fallback": "uix:air-express",
	});
}

export default Component;
