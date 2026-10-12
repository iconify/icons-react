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
		"content": `<style>.jb3qdccuz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 19.5L8.25 5l4.5 14.5m-7.45-5h5.9m-8.2 5h2.25m6.25 0h2.25M21 11.75v7.75m0-3.75a2.5 3 0 1 1-5 0a2.5 3 0 1 1 5 0");
}
</style><path class="jb3qdccuz"/>`,
		"fallback": "iconoven:font-family",
	});
}

export default Component;
