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
		"content": `<style>.d30cx0oqx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.42 20.348L9.5 21.5L7.25 20L5 21.5v-19h14v9.1M8.5 7h7m-7 3.5h7m-7 3.5h3m2.75 4L18 14.5l3.75 3.5v3.75h-7.5Z");
}
</style><path class="d30cx0oqx"/>`,
		"fallback": "uix-sharp:closing-costs",
	});
}

export default Component;
