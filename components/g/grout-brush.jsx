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
		"content": `<style>.k76pbcbok {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 2.5h8a2 2 0 0 1 2 2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2a2 2 0 0 1 2-2m1 4v3.25m3-3.25v3.25m3-3.25v3.25M6.125 13h11.75a2.625 2.625 0 0 1 2.625 2.625v3.25a2.625 2.625 0 0 1-2.625 2.625H6.125A2.625 2.625 0 0 1 3.5 18.875v-3.25A2.625 2.625 0 0 1 6.125 13M12 13v8.5m-8.5-4.25h17");
}
</style><path class="k76pbcbok"/>`,
		"fallback": "uix:grout-brush",
	});
}

export default Component;
