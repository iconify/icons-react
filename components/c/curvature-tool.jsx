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
		"content": `<style>.a2j4cwq_p {
  d: path("M8.5 11.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.efs9mvsdu {
  d: path("m10 21l-5.5-9l2-6.5h7l2 6.5ZM6.5 5.5V2.75h7V5.5m4.5 14q5.25-8.25 0-16.5m-8 18v-7.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="efs9mvsdu"/><path class="a2j4cwq_p"/></g>`,
		"fallback": "uix-sharp:curvature-tool",
	});
}

export default Component;
