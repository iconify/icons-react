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
		"content": `<style>.xpb0u_ikb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 4.5H15m-5.75 0v15m6.25-4l5 5m0-5l-5 5");
}
</style><path class="xpb0u_ikb"/>`,
		"fallback": "uix-sharp:clear-formatting",
	});
}

export default Component;
