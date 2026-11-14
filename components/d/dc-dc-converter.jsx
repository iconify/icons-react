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
		"content": `<style>.vhq2nubgc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 6h5A3.5 3.5 0 0 1 18 9.5v5a3.5 3.5 0 0 1-3.5 3.5h-5A3.5 3.5 0 0 1 6 14.5v-5A3.5 3.5 0 0 1 9.5 6M2 12h4m12 0h4M9 10.5h6m-6 3h1.5m2.75 0H15");
}
</style><path class="vhq2nubgc"/>`,
		"fallback": "uix:dc-dc-converter",
	});
}

export default Component;
