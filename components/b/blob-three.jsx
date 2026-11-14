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
		"content": `<style>.aildqlfas {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 10.25a5.5 5.5 0 1 1 10 0A5.5 5.5 0 1 1 12 19a5.5 5.5 0 1 1-5-8.75");
}
</style><path class="aildqlfas"/>`,
		"fallback": "uix:blob-three",
	});
}

export default Component;
