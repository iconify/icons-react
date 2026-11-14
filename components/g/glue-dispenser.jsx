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
		"content": `<style>.ue4-4xbzc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 2.5h6v10H9Zm1.25 10h3.5L12.5 16h-1ZM3 20.5h18M7 5.5h2");
}
</style><path class="ue4-4xbzc"/>`,
		"fallback": "uix-sharp:glue-dispenser",
	});
}

export default Component;
