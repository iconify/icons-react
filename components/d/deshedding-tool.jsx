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
		"content": `<style>.ucjo6weko {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 12.75v-7.5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v7.5m-11.5 0h18v5H3Zm1.5 5l1.5 3l1.5-3l1.5 3l1.5-3l1.5 3l1.5-3l1.5 3l1.5-3l1.5 3l1.5-3");
}
</style><path class="ucjo6weko"/>`,
		"fallback": "uix-sharp:deshedding-tool",
	});
}

export default Component;
