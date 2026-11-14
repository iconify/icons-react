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
		"content": `<style>.uxlaarbvj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11.5h3v7H13v-7h8.5m-7.25 0l3.75-6l3.5 6Z");
}
</style><path class="uxlaarbvj"/>`,
		"fallback": "uix-sharp:excavation",
	});
}

export default Component;
