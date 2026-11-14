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
		"content": `<style>.abbj17tqm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13h19v7h-19ZM5 13l12-8.5L18.75 7L10 13Zm13-7.25l3-2.25");
}
</style><path class="abbj17tqm"/>`,
		"fallback": "uix-sharp:guillotine-cutter",
	});
}

export default Component;
