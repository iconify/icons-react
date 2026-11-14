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
		"content": `<style>.ocwnkqbmk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 17h19M3 3.5h10.5V12H3Zm13.5 3H21V17h-4.5ZM8.25 12v5M4 17v4.5M20 17v4.5");
}
</style><path class="ocwnkqbmk"/>`,
		"fallback": "uix-sharp:cfo-desk",
	});
}

export default Component;
