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
		"content": `<style>.an-okrhts {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20.5h18m-14.5 0v-6m5 6v-10m5 10v-17m0 0l4 2l-4 2Z");
}
</style><path class="an-okrhts"/>`,
		"fallback": "uix-sharp:analytics-goal",
	});
}

export default Component;
