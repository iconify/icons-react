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
		"content": `<style>.csqvb1b3h {
  d: path("M21.5 4H4c0 8 1 13 4.5 17.5");
}

.ly9wi1bue {
  d: path("M13 8h4a1.5 1.5 0 0 1 1.5 1.5V19a1.5 1.5 0 0 1-1.5 1.5h-4a1.5 1.5 0 0 1-1.5-1.5V9.5A1.5 1.5 0 0 1 13 8Zm2-4v4m-3.5 6.25h7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="csqvb1b3h"/><path class="ly9wi1bue"/></g>`,
		"fallback": "uix-sharp:boat-fender",
	});
}

export default Component;
