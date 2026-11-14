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
		"content": `<style>.i-k9f8czi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8h6v8h-6Zm13 0h6v8h-6Zm-7 4H10m4 0h1.5");
}
</style><path class="i-k9f8czi"/>`,
		"fallback": "uix-sharp:air-gap",
	});
}

export default Component;
