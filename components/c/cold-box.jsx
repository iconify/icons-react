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
		"content": `<style>.walvl0fog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7h18v13.5H3Zm5 0V4h8v3m-4 3.25v7M9 12l6 3.5m-6 0l6-3.5");
}
</style><path class="walvl0fog"/>`,
		"fallback": "uix-sharp:cold-box",
	});
}

export default Component;
