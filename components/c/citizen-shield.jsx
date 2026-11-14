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
		"content": `<style>.gv6r0acyg {
  d: path("M9.5 8.25a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM8.5 16c0-1.5 1.5-2.25 3.5-2.25s3.5.75 3.5 2.25");
}

.hnvnn0bgl {
  d: path("m12 2.75l7.5 2.75v6c0 4.7-3.1 8-7.5 9.75c-4.4-1.75-7.5-5.05-7.5-9.75v-6Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hnvnn0bgl"/><path class="gv6r0acyg"/></g>`,
		"fallback": "uix-sharp:citizen-shield",
	});
}

export default Component;
