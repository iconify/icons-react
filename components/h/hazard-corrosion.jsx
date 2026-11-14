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
		"content": `<style>.aqvwnackg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.5 9.5L7 3a2.25 2.25 0 0 0-3 3l6.5 6.5m-8 6.25h19v3h-19ZM13.75 13l1 1.75a1.25 1.25 0 1 1-2 0Zm4.5 0l1 1.75a1.25 1.25 0 1 1-2 0Z");
}
</style><path class="aqvwnackg"/>`,
		"fallback": "uix-sharp:hazard-corrosion",
	});
}

export default Component;
