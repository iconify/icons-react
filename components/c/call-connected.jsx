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
		"content": `<style>.n7pb6nbyf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.226 16.793C6.778 15.738 2.958 11.48 2.5 5.75C2.5 4 4 2.5 5.75 2.5l2 .5L9 6.5L7.25 7.75c1 2.25 2.25 3.5 4.5 4.5L13 10.5l3.5 1.25l.5 2c0 .721-.255 1.399-.676 1.948M14.75 18l2 2L21 15.75");
}
</style><path class="n7pb6nbyf"/>`,
		"fallback": "uix:call-connected",
	});
}

export default Component;
