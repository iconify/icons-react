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
		"content": `<style>.l0oc3zbrx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6.5L4.5 3h15L21 6.5m-18 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0m-15 12a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm7.5 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm-3.75-1.75l5.75-5.25m-1.25 5.25L8.5 11.5");
}
</style><path class="l0oc3zbrx"/>`,
		"fallback": "uix-sharp:craft-store",
	});
}

export default Component;
