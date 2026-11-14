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
		"content": `<style>.hco5svbxl {
  d: path("M4.25 5a9.5 9.5 0 1 0 15.5 0");
}

.ki7khyb9p {
  d: path("M10 11a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ox_ldbckh {
  d: path("M8 14.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm4 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hco5svbxl"/><path class="ox_ldbckh"/><path class="ki7khyb9p"/></g>`,
		"fallback": "uix-sharp:grinding-media",
	});
}

export default Component;
