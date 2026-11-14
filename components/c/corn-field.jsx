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
		"content": `<style>.pdam8ccug {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21h19M5 21V8m0 8q-2-3.5-2.5-1M5 13c2.5-1 3.25-4 2.5-6C5.75 8 5 10 5 13Zm7 8V2.5M12 16q-2.5-3.5-3.5-1m3.5-4c2.5-1 3.25-4 2.5-6c-1.75 1-2.5 3-2.5 6Zm7 10V8m0 8q-2.5-3.5-3.5-1m3.5-2c2-1 2.75-3.5 2.25-5.5c-1.5 1-2.25 3-2.25 5.5Z");
}
</style><path class="pdam8ccug"/>`,
		"fallback": "uix-sharp:corn-field",
	});
}

export default Component;
