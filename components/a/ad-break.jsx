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
		"content": `<style>.pzp7uy9kp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.2 17.5H2.5v-11h17v6.2M8.5 2.5l2.5 4l2.5-4m-2.5 15v3m-2.5 0h4.7M16 17h1.5l4-2.25v6.75l-4-2.25H16Z");
}
</style><path class="pzp7uy9kp"/>`,
		"fallback": "uix-sharp:ad-break",
	});
}

export default Component;
