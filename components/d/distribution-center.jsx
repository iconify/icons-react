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
		"content": `<style>.sjuu4rz1o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 12.5v-6l5-3.5v3.5l5-3.5v3.5l5-3.5v9.5Zm7.5 3.25V21m-2-2l2 2l2-2m-5-3.25l-5 5.5m0-3v3h3m8-5.5l5 5.5m-3 0h3v-3");
}
</style><path class="sjuu4rz1o"/>`,
		"fallback": "uix-sharp:distribution-center",
	});
}

export default Component;
