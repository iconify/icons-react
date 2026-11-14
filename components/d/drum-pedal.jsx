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
		"content": `<style>.iu6djfmnc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20.5h18m-18 0l13.5-6m1.5 6l-3-12m-3-3a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}
</style><path class="iu6djfmnc"/>`,
		"fallback": "uix-sharp:drum-pedal",
	});
}

export default Component;
