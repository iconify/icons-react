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
		"content": `<style>.fa7xchh_g {
  fill: currentColor;
  d: path("M17 18a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}

.l3bb-sbdg {
  d: path("M11.936 19.5h-.686c-.5 0-1-.5-1-1L10 15a.781.781 0 0 0-1.5 0l-.25 3.5c0 .5-.5 1-1 1h-1c-.75 0-1.25-.5-1-1.25L6 14l.5-2l-1.25 1.5c-.25.5-.5.75-1.25.75c-1 0-1.5-.5-1.25-1.5l2-2.5C5 9 6 8.75 7.25 8.75h4c1.25 0 2.25.25 2.5 1.5l1.781 2.226m-2.176 1.216a2 2 0 0 1-.105-.192L12 12l.5 2l.032.182M7.25 4.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm10.75 10l3.248 1.875v3.75L18 21.75l-3.248-1.875v-3.75Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l3bb-sbdg"/><path class="fa7xchh_g"/></g>`,
		"fallback": "uix-sharp:endocrine-system",
	});
}

export default Component;
