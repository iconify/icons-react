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
		"content": `<style>.kn1ijnbij {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 2.5l5 5h-3v9h3l-5 5l-5-5h3v-9H7Z");
}
</style><path class="kn1ijnbij"/>`,
		"fallback": "uix-sharp:cursor-resize-vertical",
	});
}

export default Component;
