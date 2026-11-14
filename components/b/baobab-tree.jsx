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
		"content": `<style>.ldcxhrbbo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 21.5c-.5-5.5 0-9 1.5-12h4c1.5 3 2 6.5 1.5 12Zm1.5-12l-3-4H4m3 0v-3m5 7v-7m2 7l3-4h3m-3 0v-3");
}
</style><path class="ldcxhrbbo"/>`,
		"fallback": "uix-sharp:baobab-tree",
	});
}

export default Component;
