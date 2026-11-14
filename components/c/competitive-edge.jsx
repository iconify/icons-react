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
		"content": `<style>.nfmb92m7u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.75 20l16.5-16.5m-4.5 0h4.5V8m-8.5 12.5l8-8m-4 0h4v4");
}
</style><path class="nfmb92m7u"/>`,
		"fallback": "uix:competitive-edge",
	});
}

export default Component;
