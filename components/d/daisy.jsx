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
		"content": `<style>.bfbiai0yf {
  d: path("M16.75 11.25A2 2 0 0 1 14 14a2 2 0 0 1-4 0a2 2 0 0 1-2.75-2.75a2 2 0 0 1 0-4A2 2 0 0 1 10 4.5a2 2 0 0 1 4 0a2 2 0 0 1 2.75 2.75a2 2 0 0 1 0 4ZM12 16v5.5");
}

.svi45obbu {
  d: path("M10 9.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm2 11.25q4.5 0 6-3q-4-.5-6 3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bfbiai0yf"/><path class="svi45obbu"/></g>`,
		"fallback": "uix-sharp:daisy",
	});
}

export default Component;
