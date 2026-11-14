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
		"content": `<style>.nhe1cqbxb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.866 4h6.268a1.75 1.75 0 0 1 1.697 1.326l3.125 12.5A1.75 1.75 0 0 1 18.259 20H5.741a1.75 1.75 0 0 1-1.697-2.174l3.125-12.5A1.75 1.75 0 0 1 8.866 4M12 4v16m-6.5-8h13");
}
</style><path class="nhe1cqbxb"/>`,
		"fallback": "uix:distort-perspective",
	});
}

export default Component;
