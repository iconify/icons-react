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
		"content": `<style>.srrz-acys {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 9l3.75 5H21v-2.5H8l-3-4Zm-.261-3.346l1.607-1.915a1.25 1.25 0 0 1 1.761-.154a1.25 1.25 0 0 1 .154 1.761L4.654 7.261a1.25 1.25 0 0 1-1.761.154a1.25 1.25 0 0 1-.154-1.761M8 14v7m11-7v7M6 21h4m7 0h4");
}
</style><path class="srrz-acys"/>`,
		"fallback": "uix:examination-couch",
	});
}

export default Component;
