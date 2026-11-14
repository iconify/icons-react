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
		"content": `<style>.o59if0u1f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 12a5 4 0 0 1 10 0v7.5a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2Zm5-4V4M6 4h5m2.5 14H15a2 2 0 0 0 2-2v-6l1-2m2.75.25h.01m-.51-3h.01M17.5 5h.01");
}
</style><path class="o59if0u1f"/>`,
		"fallback": "uix-sharp:garden-sprayer",
	});
}

export default Component;
