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
		"content": `<style>.c-qmf7bzi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.75 19.5l5.75-15l5.75 15Zm15.75 0v-15m-3.25 3.25L18.5 4.5l3.25 3.25");
}
</style><path class="c-qmf7bzi"/>`,
		"fallback": "uix-sharp:delta-v",
	});
}

export default Component;
