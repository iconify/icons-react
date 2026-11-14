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
		"content": `<style>.tx0crrbkg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 21.5V14a2 2 0 0 1 2-2v-1.5h4V12a2 2 0 0 1 2 2v7.5Zm1.75-14h4.5v3h-4.5ZM6 2.5h12v5H6Z");
}
</style><path class="tx0crrbkg"/>`,
		"fallback": "uix-sharp:capping-machine",
	});
}

export default Component;
