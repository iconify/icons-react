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
		"content": `<style>.acud8iibl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 6.25v-2.5h2.5m1.25 0h2m2.25 0h2.5v2.5m0 1.25v2m-10.5-2v2m0 2.25v2.5h2.5m1.25 0h2m3.18-2.14l7.14 2.78l.93.36l-.95.32l-2.6.86l-.95.32l-.32.95l-.86 2.6l-.32.95l-.3-.95l-2.4-7.6l-.3-.95z");
}
</style><path class="acud8iibl"/>`,
		"fallback": "iconoven:drag-and-drop-sharp",
	});
}

export default Component;
