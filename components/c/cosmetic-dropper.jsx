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
		"content": `<style>.rikz7yigb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 11h11v10h-11Zm3 0V8.5h5V11m-4-2.5V5a1.5 1.5 0 0 1 3 0v3.5");
}
</style><path class="rikz7yigb"/>`,
		"fallback": "uix-sharp:cosmetic-dropper",
	});
}

export default Component;
