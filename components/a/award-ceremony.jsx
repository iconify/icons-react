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
		"content": `<style>.us6pfqg6p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21v-5.5h6v-3h7V17h6v4Zm6-18.5h7v3a3.5 3.5 0 0 1-7 0ZM12 9v3.5");
}
</style><path class="us6pfqg6p"/>`,
		"fallback": "uix:award-ceremony",
	});
}

export default Component;
