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
		"content": `<style>.utpyjbc1d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 15h18a9 6.5 0 0 1-18 0ZM8.5 2.5h7v4h-7Zm3.5 6l1.25 1.75a1.5 1.5 0 1 1-2.5 0Z");
}
</style><path class="utpyjbc1d"/>`,
		"fallback": "uix-sharp:glaze-dip",
	});
}

export default Component;
