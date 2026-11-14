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
		"content": `<style>.bmh31vbwi {
  d: path("M6 16.5L9 11h6.5l2.5 5.5m-5.25-14L10 5.5h4l-2.75 2.75");
}

.s_iuaubmd {
  d: path("M2.25 16.5a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Zm12 0a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s_iuaubmd"/><path class="bmh31vbwi"/></g>`,
		"fallback": "uix-sharp:e-bike",
	});
}

export default Component;
