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
		"content": `<style>.av0b61nji {
  d: path("M10 7a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Z");
}

.d4-l3rhpi {
  d: path("M5 7a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Z");
}

.n9704oh0p {
  d: path("M7.5 11.25a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Zm-4 8.5h4m0 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm3.5 0h9.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="d4-l3rhpi"/><path class="av0b61nji"/><path class="n9704oh0p"/></g>`,
		"fallback": "uix-sharp:colour-grading-settings",
	});
}

export default Component;
