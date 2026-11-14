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
		"content": `<style>.jmo7c58tv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.25 2.5h1.5a1.75 1.75 0 0 1 1.75 1.75v9A1.75 1.75 0 0 1 12.75 15h-1.5a1.75 1.75 0 0 1-1.75-1.75v-9a1.75 1.75 0 0 1 1.75-1.75M2.5 15h19m-19 3h16m-16 3.5h16M17 19.75a1.5 1.75 0 1 0 3 0a1.5 1.75 0 1 0-3 0M9.5 6h5m-5 3h5");
}
</style><path class="jmo7c58tv"/>`,
		"fallback": "uix:gas-pipeline-marker",
	});
}

export default Component;
