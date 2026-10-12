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
		"content": `<style>.py337y2cj {
  d: path("M6.5 7.75H19l-.14 1.49l-.97 10.52l-.14 1.49H6.25l-.14-1.49l-.97-10.52L5 7.75zm-3.25-2.5h17.5m-11 0v-2.5h4.5v2.5");
}

.q65xz8b1w {
  d: path("m12.75 10.25l-2.5 4.25h3.5l-2.5 4");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="py337y2cj"/><path class="q65xz8b1w"/></g>`,
		"fallback": "iconoven:e-waste-sharp",
	});
}

export default Component;
