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
		"content": `<style>.hbbuowbjk {
  d: path("M2.5 12C5 4 17 4 19.5 12C17 20 5 20 2.5 12Zm17 0q1.5-1.5 2-4");
}

.rus7djb6b {
  d: path("M5 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm4 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm4 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hbbuowbjk"/><path class="rus7djb6b"/></g>`,
		"fallback": "uix-sharp:allergen-soy",
	});
}

export default Component;
