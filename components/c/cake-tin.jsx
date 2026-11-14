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
		"content": `<style>.bthtq9f-l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9a8.5 3 0 1 0 17 0a8.5 3 0 1 0-17 0m0 0v6m17-6v6m-17 0a8.5 3 0 0 0 17 0m0-5.25h2v3h-2");
}
</style><path class="bthtq9f-l"/>`,
		"fallback": "uix:cake-tin",
	});
}

export default Component;
