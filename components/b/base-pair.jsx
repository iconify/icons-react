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
		"content": `<style>.d2zs-9bzd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3v18M18 3v18M6 8.5h4.5m3 0H18m-12 7h4.5m3 0H18");
}
</style><path class="d2zs-9bzd"/>`,
		"fallback": "uix:base-pair",
	});
}

export default Component;
