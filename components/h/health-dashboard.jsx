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
		"content": `<style>.m6kvr71pk {
  d: path("M2.5 3h19v13.5h-19ZM12 16.5V20m-4 .5h8");
}

.n2wiosvse {
  d: path("M5.5 6h6v7.5h-6Zm2 5.5v-2m2 2V8m4 1.75a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="m6kvr71pk"/><path class="n2wiosvse"/></g>`,
		"fallback": "uix-sharp:health-dashboard",
	});
}

export default Component;
