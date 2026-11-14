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
		"content": `<style>.etmf5jbdo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 3h11.445a1.75 1.75 0 0 1 1.329.611l3 3.5a1.75 1.75 0 0 1 0 2.278l-3 3.5a1.75 1.75 0 0 1-1.329.611H4.75A1.75 1.75 0 0 1 3 11.75v-7A1.75 1.75 0 0 1 4.75 3M10 13.5v8M6 6v4.5m0-2.25h9M15 6v4.5");
}
</style><path class="etmf5jbdo"/>`,
		"fallback": "uix:distance-sign",
	});
}

export default Component;
