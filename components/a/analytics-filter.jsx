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
		"content": `<style>.xv528obca {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 2.5h17l-6.5 6v2h-4v-2ZM3 14h18M3 17.75h18M3 21.5h18");
}
</style><path class="xv528obca"/>`,
		"fallback": "uix-sharp:analytics-filter",
	});
}

export default Component;
