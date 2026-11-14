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
		"content": `<style>.ay6u42zsj {
  d: path("m11.422 18.982l-.922.518l-8-4.5V7l8-4.5l8 4.5v4.921");
}

.ilr02kbgm {
  d: path("m2.5 7l8 4.5l8-4.5m-8 4.5v8m7.5-4.75v6.5m-2.75-5l5.5 3.5m-5.5 0l5.5-3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ay6u42zsj"/><path class="ilr02kbgm"/></g>`,
		"fallback": "uix-sharp:freezing",
	});
}

export default Component;
