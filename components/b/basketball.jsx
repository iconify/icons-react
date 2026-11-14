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
		"content": `<style>.i9tswumry {
  d: path("M5.25 5.25C8.5 9 8.5 15 5.25 18.75m13.5-13.5C15.5 9 15.5 15 18.75 18.75");
}

.ivt66egxw {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0ZM12 2.5v19M2.5 12h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ivt66egxw"/><path class="i9tswumry"/></g>`,
		"fallback": "uix-sharp:basketball",
	});
}

export default Component;
