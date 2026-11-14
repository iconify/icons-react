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
		"content": `<style>.j-_57tbrl {
  d: path("m12 2.5l8 4V14l-8 4l-8-4V6.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vvjh53a6m {
  d: path("m4 6.5l8 4l8-4m-8 4V18m-8 3h16M4 19.5V22m16-2.5V22");
}
</style><g class="ulnmmdpxh"><path class="j-_57tbrl"/><path class="vvjh53a6m"/></g>`,
		"fallback": "uix-sharp:bundle-size",
	});
}

export default Component;
