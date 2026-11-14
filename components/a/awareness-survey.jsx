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
		"content": `<style>.adqmrhm1q {
  d: path("M4.5 3.5h15v18h-15Z");
}

.klplchb9b {
  d: path("M8.5 2h7v3h-7Zm-1 7l1.25 1l2-2M7.5 13.5l1.25 1l2-2M7.5 18l1.25 1l2-2m2.5-8h3.25m-3.25 4.5h3.25M13.25 18h3.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="adqmrhm1q"/><path class="klplchb9b"/></g>`,
		"fallback": "uix-sharp:awareness-survey",
	});
}

export default Component;
