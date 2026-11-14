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
		"content": `<style>.oa7a56bbw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9V7.5A2.5 2.5 0 0 1 5 5h3m8 0h3a2.5 2.5 0 0 1 2.5 2.5V9m0 6v1.5A2.5 2.5 0 0 1 19 19h-3m-8 0H5a2.5 2.5 0 0 1-2.5-2.5V15M11 5h2m-2 14h2M6 9.5h12");
}
</style><path class="oa7a56bbw"/>`,
		"fallback": "uix-sharp:card-virtual",
	});
}

export default Component;
