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
		"content": `<style>.bzfticbck {
  d: path("M5.5 12h3L10 9l2.25 6l1.5-3h4.75M5.75 8.25h.01m12.49 7.5h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wj6m6pb2d {
  d: path("M4 5.5h16A1.5 1.5 0 0 1 21.5 7v10a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 17V7A1.5 1.5 0 0 1 4 5.5Z");
}
</style><g class="ulnmmdpxh"><path class="wj6m6pb2d"/><path class="bzfticbck"/></g>`,
		"fallback": "uix-sharp:heart-patch",
	});
}

export default Component;
