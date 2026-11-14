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
		"content": `<style>.d-8seib-g {
  d: path("M5 5.5a7 2.5 0 1 0 14 0a7 2.5 0 1 0-14 0Zm-2 9a9 2.5 0 1 0 18 0a9 2.5 0 1 0-18 0Zm2-9l-2 9m16-9l2 9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v3gwgj-kc {
  d: path("M4.5 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm11 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}
</style><g class="ulnmmdpxh"><path class="d-8seib-g"/><path class="v3gwgj-kc"/></g>`,
		"fallback": "uix-sharp:baby-walker",
	});
}

export default Component;
