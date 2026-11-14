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
		"content": `<style>.msvln8b-t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6.5h19V10h-19Zm2 3.5v6.5a1.5 1.5 0 0 0 3 0v-1m3-5.5v6.5a1.5 1.5 0 0 0 3 0v-1m3-5.5v6.5a1.5 1.5 0 0 0 3 0v-1");
}
</style><path class="msvln8b-t"/>`,
		"fallback": "uix-sharp:coat-hooks",
	});
}

export default Component;
