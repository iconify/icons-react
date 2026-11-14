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
		"content": `<style>.gdx-9-bsp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 11h15v9.5h-15Zm7.5 0V7m0 0c-1.5 0-1.5-2 0-3.5C13.5 5 13.5 7 12 7Zm-7.5 8h15");
}
</style><path class="gdx-9-bsp"/>`,
		"fallback": "uix-sharp:birthday-offer",
	});
}

export default Component;
