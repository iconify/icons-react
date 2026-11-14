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
		"content": `<style>.sqwm5bb_v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5v19m0-17c5.5 2 5.5 6 0 8c-5.5-2-5.5-6 0-8ZM5 18a7 2.5 0 1 0 14 0a7 2.5 0 1 0-14 0Z");
}
</style><path class="sqwm5bb_v"/>`,
		"fallback": "uix-sharp:drop-spindle",
	});
}

export default Component;
