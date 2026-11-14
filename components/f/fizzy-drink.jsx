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
		"content": `<style>.u1ndw6bnt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 9v1.5l-2.5 3V20a1.5 1.5 0 0 0 1.5 1.5h5A1.5 1.5 0 0 0 16 20v-6.5l-2.5-3V9ZM7.25 5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M13 4a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><path class="u1ndw6bnt"/>`,
		"fallback": "uix:fizzy-drink",
	});
}

export default Component;
