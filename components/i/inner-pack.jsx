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
		"content": `<style>.ktkhscf5f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 10h18v11.5H3Zm0 0l-.5-4.5l4.5 1M21 10l.5-4.5l-4.5 1M8 10V4h8v6m-4-6v2.5m-9 7h18");
}
</style><path class="ktkhscf5f"/>`,
		"fallback": "uix-sharp:inner-pack",
	});
}

export default Component;
