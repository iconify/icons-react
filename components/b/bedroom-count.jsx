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
		"content": `<style>.fw9vf5jzx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 5.5v15M3 17h9.9M3 12.5h9.9m-7.4-3h5v3h-5Zm10.25 5h4.5l-2.75 3c1.75-.25 3.25.75 3.25 2S19.5 21.75 18 21.75c-1.25 0-2.25-.5-2.75-1.25");
}
</style><path class="fw9vf5jzx"/>`,
		"fallback": "uix-sharp:bedroom-count",
	});
}

export default Component;
