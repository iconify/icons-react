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
		"content": `<style>.erd33n0kf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 21.5v-16a2.75 2.75 0 0 0-5.5 0v4c-2.5 0-2.75 4 0 5.75v6.25Zm3 0v-16a2.75 2.75 0 0 1 5.5 0v4c2.5 0 2.75 4 0 5.75v6.25ZM5 17.75h5.5m3 0H19");
}
</style><path class="erd33n0kf"/>`,
		"fallback": "uix:goalkeeper-gloves",
	});
}

export default Component;
