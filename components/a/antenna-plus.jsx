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
		"content": `<style>.r3baufbxw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 5.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM8.5 7.25V20.5m-3.5 0h7m-.318-18.182a4.5 4.5 0 0 1 0 6.364m-6.364 0a4.5 4.5 0 0 1 0-6.364M18 15v6m-3-3h6");
}
</style><path class="r3baufbxw"/>`,
		"fallback": "uix-sharp:antenna-plus",
	});
}

export default Component;
