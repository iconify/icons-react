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
		"content": `<style>.u3d7j5b4i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 5zA2.25 2.25 0 0 1 7 7.25v9.5A2.25 2.25 0 0 1 4.75 19a2.25 2.25 0 0 1-2.25-2.25v-9.5A2.25 2.25 0 0 1 4.75 5m14.5 0za2.25 2.25 0 0 1 2.25 2.25v9.5A2.25 2.25 0 0 1 19.25 19A2.25 2.25 0 0 1 17 16.75v-9.5A2.25 2.25 0 0 1 19.25 5m-9.5 7h4.5M12 9.75L14.25 12L12 14.25");
}
</style><path class="u3d7j5b4i"/>`,
		"fallback": "uix:heat-transfer",
	});
}

export default Component;
