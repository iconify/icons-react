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
		"content": `<style>.gur12fbkz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13.5h19m-17 0v3a4 4 0 0 0 4 4h7a4 4 0 0 0 4-4v-3m-15-5a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM10.25 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM16 9a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}
</style><path class="gur12fbkz"/>`,
		"fallback": "uix-sharp:bath-bubbles-kids",
	});
}

export default Component;
