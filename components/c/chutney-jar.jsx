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
		"content": `<style>.s7copvbkg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 10.5h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Zm0-3h12v3H6ZM3.5 3.75h12.25m0 0a2.75 1.5 0 1 0 5.5 0a2.75 1.5 0 1 0-5.5 0Z");
}
</style><path class="s7copvbkg"/>`,
		"fallback": "uix-sharp:chutney-jar",
	});
}

export default Component;
