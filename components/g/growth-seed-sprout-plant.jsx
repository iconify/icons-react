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
		"content": `<style>.ftcbu2-gk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 18.5a4.5 3 0 1 0 9 0a4.5 3 0 1 0-9 0Zm4.5-3V8m0 2c0-3.5-2.5-5.5-6.5-5.5C5.5 8 8 10 12 10Zm0-2c0-3.5 2.5-5.5 6.5-5.5C18.5 6 16 8 12 8Z");
}
</style><path class="ftcbu2-gk"/>`,
		"fallback": "uix-sharp:growth-seed-sprout-plant",
	});
}

export default Component;
