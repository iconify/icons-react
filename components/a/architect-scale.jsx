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
		"content": `<style>.wgjgtm8re {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 3.75l9.25 16H2.75Zm-3 16v-3m3 3v-5m3 5v-3");
}
</style><path class="wgjgtm8re"/>`,
		"fallback": "uix-sharp:architect-scale",
	});
}

export default Component;
