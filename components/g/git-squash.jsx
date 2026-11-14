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
		"content": `<style>.rds0v2f4p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.5h1.5A1.5 1.5 0 0 1 7 4v1.5A1.5 1.5 0 0 1 5.5 7H4a1.5 1.5 0 0 1-1.5-1.5V4A1.5 1.5 0 0 1 4 2.5m0 7.25h1.5a1.5 1.5 0 0 1 1.5 1.5v1.5a1.5 1.5 0 0 1-1.5 1.5H4a1.5 1.5 0 0 1-1.5-1.5v-1.5A1.5 1.5 0 0 1 4 9.75M4 17h1.5A1.5 1.5 0 0 1 7 18.5V20a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 20v-1.5A1.5 1.5 0 0 1 4 17m13.25-8h2.5a1.75 1.75 0 0 1 1.75 1.75v2.5A1.75 1.75 0 0 1 19.75 15h-2.5a1.75 1.75 0 0 1-1.75-1.75v-2.5A1.75 1.75 0 0 1 17.25 9m-7.5 3h3M11 10.25L12.75 12L11 13.75");
}
</style><path class="rds0v2f4p"/>`,
		"fallback": "uix:git-squash",
	});
}

export default Component;
