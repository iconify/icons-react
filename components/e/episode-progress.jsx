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
		"content": `<style>.o219yjbqj {
  d: path("M11.5 11.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm4 0H18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x7lqlfb-m {
  d: path("M2.5 3.5h19v13h-19Zm9.5 13v4m-4 0h8M6 11.75h5.5");
}
</style><g class="ulnmmdpxh"><path class="x7lqlfb-m"/><path class="o219yjbqj"/></g>`,
		"fallback": "uix-sharp:episode-progress",
	});
}

export default Component;
