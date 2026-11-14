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
		"content": `<style>.muedevbpj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 12l5-6h14v12h-14Zm4.25 0h.01M13 8.75l-.75 6.5m4.5-6.5l-.75 6.5m-5.5-4.75h8m-8.25 3h8");
}
</style><path class="muedevbpj"/>`,
		"fallback": "uix-sharp:hash-tag",
	});
}

export default Component;
